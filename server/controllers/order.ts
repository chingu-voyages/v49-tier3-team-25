import httpStatus from "http-status";

import { User, Order, Book } from "../models";

import { getCartDetail } from "./cart";
import { isValidTransition, validateObjectId } from "../helpers";
import { ApiError, catchAsync } from "../utils";

export const getAllMyOrders = catchAsync(async (req, res) => {
    const decodedUser = (req as any).decoded;

    const foundUser = await User.findById(decodedUser._id).populate('orders');

    const response = { 
        message: 'Get all my orders successful.',
        data: foundUser?.orders,
    };

    res.status(httpStatus.OK).send(response);
});

export const getAllOrders = catchAsync(async (req, res) => {
    const orders = await Order.find();

    const response = { 
        message: 'Get all orders successful.',
        data: orders 
    };

    res.status(httpStatus.OK).send(response);
});

export const checkoutCart = catchAsync(async (req, res) => {
    const decodedUser = (req as any).decoded;
    const { recipientProfile, recipientAddress, paymentMethod} = req.body;

    const { items, total } = await getCartDetail(decodedUser._id);
    if (items.length < 1) throw new ApiError(httpStatus.BAD_REQUEST, 'Your cart is empty');

    for await (const item of items) {
        const foundBook = await Book.findById(item.book._id);
        if (!foundBook) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');

        if (foundBook.stockQuantity < item.quantity) throw new ApiError(httpStatus.BAD_REQUEST, `Not enough stock for '${foundBook.title}'.`);
    };

    for await (const item of items) {
        const foundBook = await Book.findById(item.book._id);
        if (!foundBook) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');

        foundBook.stockQuantity = foundBook.stockQuantity - item.quantity;
        foundBook.sales = foundBook.sales + item.quantity;

        await foundBook.save();
    };
    
    const newOrder = {
        orderDate: new Date(),
        currentStatus: 'PENDING',
        items,
        recipientProfile,
        recipientAddress,
        paymentMethod,
        total
    }

    const order = new Order({ ...newOrder });
    const result = await order.save();

    const foundUser = await User.findByIdAndUpdate(decodedUser._id, { carts: [], $addToSet: { orders: result._id } });
    if (!foundUser) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

    const response = { 
        message: 'Checkout successful.',
    };

    res.status(httpStatus.OK).send(response);
});

export const changeStatus = catchAsync(async (req, res) => {
    const status = req.body.status;
    const orderId = validateObjectId(req.body.orderId);

    const foundOrder = await Order.findById(orderId);
    if (!foundOrder) throw new ApiError(httpStatus.NOT_FOUND, 'Order not found.');

    if (foundOrder.currentStatus === 'CANCELED') 
        throw new ApiError(httpStatus.BAD_REQUEST, 'Cannot change status of a canceled order.');
    if (foundOrder.currentStatus === 'DELIVERED') 
        throw new ApiError(httpStatus.BAD_REQUEST, 'Cannot change status of a delivered order.');

    if (status === 'CANCELED') {
        for await (const item of foundOrder.items) {
            const foundBook = await Book.findById(item.book._id);
            if (!foundBook) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
    
            foundBook.stockQuantity = foundBook.stockQuantity + item.quantity;
            foundBook.sales = foundBook.sales - item.quantity;
    
            await foundBook.save();
        }
    } else {
        // @ts-ignore
        if (!isValidTransition(foundOrder.currentStatus, status)) 
            throw new ApiError(httpStatus.BAD_REQUEST, `Invalid status transition. Current status: ${foundOrder.currentStatus}`);    
    }

    foundOrder.currentStatus = status;
    foundOrder.timelineStatus.push({ status, date: new Date() })

    await foundOrder.save();

    const response = { 
        message: 'Change status order successful.',
    };

    res.status(httpStatus.OK).send(response);
});

