import { Router } from 'express';
import { getAllOrders, getAllMyOrders, checkoutCart, changeStatus } from '../controllers/order';
import { validate } from '../middleware/validate';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { orderValidation } from '../validations';

const router = Router();

router.get('/', isAuthenticated('user'), getAllMyOrders);
router.get('/all', isAuthenticated('admin'), getAllOrders);
router.post('/checkout', validate(orderValidation.checkout), isAuthenticated('user'), checkoutCart);
router.post('/status', validate(orderValidation.status), isAuthenticated('admin'), changeStatus);

export { router };
