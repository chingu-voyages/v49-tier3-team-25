import { Router } from 'express';
import { getMyWishlists, addWishlist, removeWishlist } from '../controllers/wishlist';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = Router();

router.get('/', isAuthenticated('user'), getMyWishlists);
router.post('/:bookId', isAuthenticated('user'), addWishlist);
router.delete('/:bookId', isAuthenticated('user'), removeWishlist);


export { router };
