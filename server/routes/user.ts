import { Router } from 'express';
import { signUp, login, getMyProfile } from '../controllers/user';
import { validate } from '../middleware/validate';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { userValidation } from '../validations';

const router = Router();

router.post('/signup', validate(userValidation.signUp), signUp);
router.post('/login', validate(userValidation.login), login);
router.get('/profile', isAuthenticated('user'), getMyProfile);

export { router };
