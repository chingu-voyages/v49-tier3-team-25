import { Router } from "express";

import { createBook, getBooks, getBookById, deleteBook, updateBook } from "../controllers/book";

import { isAuthenticated } from "../middleware/isAuthenticated";

const router = Router();

router.post('/', isAuthenticated('admin'), createBook);
router.get('/', getBooks);
router.get('/:bookId', getBookById);
router.delete('/:bookId', isAuthenticated('admin'), deleteBook);
router.put('/:bookId', isAuthenticated('admin'), updateBook);

export { router };