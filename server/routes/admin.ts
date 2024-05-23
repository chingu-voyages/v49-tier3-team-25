import { Router } from 'express';
import { signUp, login, getMyProfile } from '../controllers/admin';
import { validate } from '../middleware/validate';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { adminValidation } from '../validations';

const router = Router();

router.post('/signup', validate(adminValidation.signUp), signUp);
router.post('/login', validate(adminValidation.login), login);
router.get('/profile', isAuthenticated('admin'), getMyProfile);

export { router };
