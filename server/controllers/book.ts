import httpStatus from "http-status";
import { Book } from "../models/book";
import { ApiError, catchAsync } from "../utils";
import { validateObjectId } from "../helpers";

export const createBook = catchAsync(async (req, res) => {
    const { 
        title, 
        author, 
        description, 
        imageUrls, 
        genres, 
        sku, 
        stockQuantity, 
        costPrice, 
        salePrice, 
        discount, 
        tags } = req.body
    const decodedAdmin = (req as any).decoded;

    const book = new Book({
        title,
        author,
        description,
        imageUrls,
        genres,
        sku,
        stockQuantity,
        costPrice,
        salePrice,
        discount,
        tags,
        createdBy: decodedAdmin._id,
    });

    await book.save();

    const result = await Book.findById(book._id).select('-createdBy'); 

    const response = {
        message: "Create book successfully.",
        result
    };

    res.status(httpStatus.OK).send(response);
});

export const getBooks = catchAsync(async (req, res) => {
    const books = await Book.find().select('-createdBy');

    const response = {
        message: "Get all books successful.",
        data: books
    };

    res.status(httpStatus.OK).send(response);
});

export const getBookById = catchAsync(async (req, res) => {
    const bookId = validateObjectId(req.params.bookId);
    
    const book = await Book.findById(bookId, '-createdBy');
    if (!book) throw new ApiError(httpStatus.NOT_FOUND, "Book not found");

    const response = {
        message: "Get book successfull",
        data: book
    }

    res.status(httpStatus.OK).send(response);
});

export const deleteBook = catchAsync(async (req, res) => {
    const bookId = validateObjectId(req.params.bookId);

    const book = await Book.findByIdAndDelete(bookId);
    if (!book) throw new ApiError(httpStatus.NOT_FOUND, "Book not found");

    const response = {
        message: 'Delete book successfull',
    }

    res.status(httpStatus.OK).send(response);
});

export const updateBook = catchAsync(async (req, res) => {
    const bookId = validateObjectId(req.params.bookId);
    
    const updatedBook = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        imageUrls: req.body.imageUrls,
        genres: req.body.genres,
        sku: req.body.sku,
        stockQuantity: req.body.stockQuantity,
        costPrice: req.body.costPrice,
        salePrice: req.body.salePrice,
        discount: req.body.discount,
        tags: req.body.tags,
    }
    
    const newBook = await Book.findByIdAndUpdate(bookId, { $set: updatedBook }, { new: true, select: '-createdBy' });
    if (!newBook) throw new ApiError(httpStatus.NOT_FOUND, "Book not found");

    const response = {
        message: "Update book successful.",
        data: newBook,
    }
    
    res.status(httpStatus.OK).send(response);
});