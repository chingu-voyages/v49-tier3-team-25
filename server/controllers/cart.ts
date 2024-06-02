import httpStatus from "http-status";

import { User, Book } from "../models";

import { validateObjectId } from "../helpers";
import { ApiError, catchAsync } from "../utils";

export const getMyCarts = catchAsync(async (req, res) => {
    const decodedUser = (req as any).decoded;

    const foundUser = await User.findById(decodedUser._id).populate('carts.item');
    if (!foundUser) throw new ApiError(httpStatus.BAD_REQUEST, 'User not found.');
    
    let total = 0;
    const items = foundUser.carts.map((cart) => {   
        const price = 50; //! NEED TO UPDATE LATER
        const subtotal = price * cart.quantity;
        total += subtotal; 
        
        return {
            book: cart.toObject().item, 
            quantity: cart.toObject().quantity, 
            subtotal 
        };
    });

    const response = { 
        message: 'Get all my carts successful.',
        data: { items, total }
    };

    res.status(httpStatus.OK).send(response);
})

export const addOrUpdateCartItem = catchAsync(async (req, res) => {    
    const decodedUser = (req as any).decoded;
    const bookId = validateObjectId(req.params.bookId);
    const quantity = req.params.quantity

    const foundBook = await Book.findById(bookId);
    if (!foundBook) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found.');

    const foundUser = await User.findById(decodedUser._id);
    if (!foundUser) throw new ApiError(httpStatus.BAD_REQUEST, 'User not found.');

    const cartItem = foundUser.carts.find(item => item.item.equals(bookId));

    if (cartItem) {
        if (cartItem.quantity === Number(quantity)) throw new ApiError(httpStatus.NOT_FOUND, 'Quantity remains unchanged. No update needed.');
        cartItem.quantity = Number(quantity);
    } else {
        foundUser.carts.push({ item: bookId, quantity: Number(quantity) });
    }

    await foundUser.save();

    const response = { 
        message: 'Add or Update Cart successful.',
        data: {
            bookId,
            quantity: Number(quantity),
        }
    };

    res.status(httpStatus.OK).send(response);
})

export const removeCart = catchAsync(async (req, res) => {
    const decodedUser = (req as any).decoded;
    const bookId = validateObjectId(req.params.bookId);

    const foundUser = await User.findById(decodedUser._id);
    if (!foundUser) throw new ApiError(httpStatus.NOT_FOUND, 'User not found.');

    const cartItem = foundUser.carts.find(cart => cart.item.equals(bookId));
    if (!cartItem) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found in cart.');

    const cartItemIndex = foundUser.carts.findIndex(cart => cart.item.equals(bookId));
    if (cartItemIndex === -1) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found in cart.');
    
    foundUser.carts.splice(cartItemIndex, 1);

    await foundUser.save();

    const response = { 
        message: 'Remove cart successful.',
    };

    res.status(httpStatus.OK).send(response);
})