import { Router } from "express";
import { createBook, getBooks, getBookById, deleteBook, updateBook } from "../controllers/book";
import { validate } from "../middleware/validate";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { bookValidation } from "../validations";

const router = Router();

router.post('/', validate(bookValidation.create), isAuthenticated('admin'), createBook);
router.get('/', getBooks);
router.get('/:bookId', getBookById);
router.delete('/:bookId', isAuthenticated('admin'), deleteBook);
router.put('/:bookId', validate(bookValidation.update), isAuthenticated('admin'), updateBook);

export { router };