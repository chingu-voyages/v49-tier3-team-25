import { Router } from "express";

import { createBook, getBooks,getBookById, deleteBook } from "../controllers/book";

const router = Router();

router.post('/createbook', createBook);

router.get('/getbooks', getBooks);

router.get('/getbook/:bookId', getBookById);

router.delete('/deletebook/:bookId', deleteBook);

export { router };