import { Router } from 'express';
import { addOrUpdateCartItem, getMyCarts, removeCart } from '../controllers/cart';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = Router();

router.get('/', isAuthenticated('user'), getMyCarts);
router.post('/:bookId/:quantity', isAuthenticated('user'), addOrUpdateCartItem);
router.delete('/:bookId', isAuthenticated('user'), removeCart);

export { router };
