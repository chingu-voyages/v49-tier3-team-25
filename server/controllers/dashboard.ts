import httpStatus from "http-status";
import { startOfWeek, endOfWeek, subWeeks } from 'date-fns';

import { User, Order, Book } from "../models";

import { calculateTotalCost, calculatePercentageChange, calculateSalesTimeline } from "../helpers";
import { catchAsync } from "../utils";

export const getDashboardDetails = catchAsync(async (req, res) => {  
    const startOfThisWeek = startOfWeek(new Date(), { weekStartsOn: 0 }); // Sunday
    const endOfThisWeek = endOfWeek(new Date(), { weekStartsOn: 0 }); // Saturday
    const startOfLastWeek = startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 0 }); // Previous Sunday
    const endOfLastWeek = endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 0 }); // Previous Saturday

    const [ordersThisWeek, ordersLastWeek, bestSellingBooks] = await Promise.all([
        Order.find({ orderDate: { $gte: startOfThisWeek, $lte: endOfThisWeek } }),
        Order.find({ orderDate: { $gte: startOfLastWeek, $lte: endOfLastWeek }}),
        Book.find().sort({ sales: -1 }).limit(5).select('title sales salePrice discount stockQuantity genres'),
    ]);

    const totalSalesThisWeek = ordersThisWeek.reduce((total, order) => total + order.total, 0);
    const totalSalesLastWeek = ordersLastWeek.reduce((total, order) => total + order.total, 0);

    const totalCostThisWeek = calculateTotalCost(ordersThisWeek);
    const totalCostLastWeek = calculateTotalCost(ordersLastWeek);

    const totalSalesPercentageChange = calculatePercentageChange(totalSalesThisWeek, totalSalesLastWeek);

    const salesTimeline = calculateSalesTimeline(ordersThisWeek);

    const totalSalesAndCost = {
        sales: totalSalesThisWeek,
        cost: totalCostThisWeek,
        percentageChange: totalSalesPercentageChange,
        timePeriod: 'this week',
        comparisonPeriod: 'last week',
        salesTimeline,
    };
   
    const totalOrdersPercentageChange = calculatePercentageChange(ordersThisWeek.length, ordersLastWeek.length);

    const totalOrders = {
        value: ordersThisWeek.length,
        percentageChange: totalOrdersPercentageChange,
        timePeriod: 'this week',
        comparisonPeriod: 'last week'
    }

    const totalProfitThisWeek = totalSalesThisWeek - totalCostThisWeek;
    const totalProfitLastWeek = totalSalesLastWeek - totalCostLastWeek;

    const totalProfitPercentageChange = calculatePercentageChange(totalProfitThisWeek, totalProfitLastWeek);

    const totalProfit = {
        value: totalProfitThisWeek,
        percentageChange: totalProfitPercentageChange,
        timePeriod: 'this week',
        comparisonPeriod: 'last week'
    };

    const formatedBestSellingBooks = bestSellingBooks.map((book) => {
        return {
            id: book._id,
            title: book.title,
            totalOrder: book.sales,
            status: book.stockQuantity > 0 ? 'stock' : 'out',
            price: book.salePrice - (book.salePrice * book.discount),
        }
    });

    const formatedOrderThisWeek = await Promise.all(
        ordersThisWeek.map(async (order) => {
            const customer = await User.findOne({ orders: order._id });
            
            return {
                id: order._id,
                orderDate: order.orderDate,
                customer: customer?.fullName,
                status: order.currentStatus,
                total: order.total,
            };
        })
    );
     
    const response = { 
        message: 'Get dashboard details.',
        data: {
            totalSalesAndCost,
            totalOrders,
            totalProfit,
            bestSellingProducts: formatedBestSellingBooks,
            ordersThisWeek: formatedOrderThisWeek,
        }
    };

    res.status(httpStatus.OK).send(response);
})