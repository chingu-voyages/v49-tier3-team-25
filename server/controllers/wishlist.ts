import httpStatus from "http-status";

import { User, Book } from "../models";

import { validateObjectId } from "../helpers";
import { ApiError, catchAsync } from "../utils";


export const getMyWishlists = catchAsync(async (req, res) => {
    const decodedUser = (req as any).decoded;

    const foundUser = await User.findById(decodedUser._id).populate('wishlists');

    const response = { 
        message: 'Get all wishlists successful.',
        data: foundUser?.wishlists,
    };

    res.status(httpStatus.OK).send(response);
})

export const addWishlist = catchAsync(async (req, res) => {    
    const decodedUser = (req as any).decoded;
    const bookId = validateObjectId(req.params.bookId);

    const foundBook = await Book.findById(bookId);
    if (!foundBook) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found.');

    const foundUser = await User.findByIdAndUpdate(decodedUser._id, { $addToSet: { wishlists: bookId } });
    if (!foundUser) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    
    const isBookInWishlist = foundUser.wishlists.find(id => id.equals(bookId));
    if (isBookInWishlist) throw new ApiError(httpStatus.BAD_REQUEST, 'Book already exists.');

    const response = { 
        message: 'Add wishlist successful.',
    };

    res.status(httpStatus.OK).send(response);
})

export const removeWishlist = catchAsync(async (req, res) => {
    const decodedUser = (req as any).decoded;
    const bookId = validateObjectId(req.params.bookId);

    const foundUser = await User.findByIdAndUpdate(decodedUser._id, { $pull: { wishlists: bookId } });

    const isBookInWishlist = foundUser?.wishlists.find(id => id.equals(bookId));
    if (!isBookInWishlist) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found.');

    const response = { 
        message: 'Remove wishlist successful.',
    };

    res.status(httpStatus.OK).send(response);
})