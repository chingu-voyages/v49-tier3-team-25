import httpStatus from "http-status";
import { startOfWeek, endOfWeek, subWeeks } from 'date-fns';

import { User, Order } from "../models";

import { calculatePercentageChange, calculateTotalCost } from "../helpers";
import { catchAsync } from "../utils";

export const getDashboardDetails = catchAsync(async (req, res) => {  
    const startOfThisWeek = startOfWeek(new Date(), { weekStartsOn: 0 }); // Sunday
    const endOfThisWeek = endOfWeek(new Date(), { weekStartsOn: 0 }); // Saturday
    const startOfLastWeek = startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 0 }); // Previous Sunday
    const endOfLastWeek = endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 0 }); // Previous Saturday

    const ordersThisWeek = await Order.find({ orderDate: { $gte: startOfThisWeek, $lte: endOfThisWeek } });
    const ordersLastWeek = await Order.find({ orderDate: { $gte: startOfLastWeek, $lte: endOfLastWeek }});

    const totalThisWeek = ordersThisWeek.reduce((total, order) => total + order.total, 0);
    const totalLastWeek = ordersLastWeek.reduce((total, order) => total + order.total, 0);

    const totalPercentageChange = calculatePercentageChange(totalThisWeek, totalLastWeek);

    const totalOrders = {
        value: totalThisWeek,
        percentageChange: totalPercentageChange,
        timePeriod: 'this week',
        comparisonPeriod: 'last week'
    }

    const totalCostThisWeek = calculateTotalCost(ordersThisWeek);
    const totalCostLastWeek = calculateTotalCost(ordersLastWeek);

    const totalProfitThisWeek = totalThisWeek - totalCostThisWeek;
    const totalProfitLastWeek = totalLastWeek - totalCostLastWeek;

    const totalProfitPercentageChange = calculatePercentageChange(totalProfitThisWeek, totalProfitLastWeek);

    const totalProfit = {
        value: totalCostThisWeek,
        percentageChange: totalProfitPercentageChange,
        timePeriod: 'this week',
        comparisonPeriod: 'last week'
    }

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
            totalOrders,
            totalProfit,
            ordersThisWeek: formatedOrderThisWeek,
        }
    };

    res.status(httpStatus.OK).send(response);
})