import { format } from "path";
import { Book } from "../models/book";
import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils";

export const createBook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const imageUrls = req.body.imageUrls;
    const isbn = req.body.isbn;
    const publisher = req.body.publisher;
    const published_date = req.body.published_date;
    const language = req.body.language;
    const pages = req.body.pages;
    const genre = req.body.genre;
    const formats = req.body.formats;


    const book = new Book({
        title: title,
        author: author,
        description: description,
        imageUrls: imageUrls,
        isbn: isbn,
        publisher: publisher,
        published_date: published_date,
        language: language,
        pages: pages,
        genre: genre,
        formats: formats
    });

    const result = await book.save();
    const response = {
        message: "Book created successfully.",
        result: result
    };

    res.status(201).send(response);
});

export const getBooks = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const books = await Book.find({});
    const response = {
        message: "This is the list of all the books",
        data: books
    };

    res.status(200).send(response);

});


export const getBookById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const bookId=req.params.bookId;

    const book= await Book.findById(bookId);

    const response={
        message:"Get Book Data Successfull",
        data:book
    }

    res.status(200).send(response);

});

export const deleteBook=catchAsync(async(req: Request, res: Response, next: NextFunction)=>{

    const bookId=req.params.bookId;

    const deleted=await Book.deleteOne({_id:bookId});

    const response={
        message:'Deletion is Successfull',
        data:deleted
    }

    res.status(200).send(response);

});