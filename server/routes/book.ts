import { Router } from "express";

import { createBook, getBooks, getBookById, deleteBook, updateBook } from "../controllers/book";

const router = Router();

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:bookId', getBookById);
router.delete('/:bookId', deleteBook);
router.put('/:bookId', updateBook);

export { router };