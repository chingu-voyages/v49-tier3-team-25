import { Router } from 'express';
import { signUp, login } from '../controllers/user';
import { validate } from '../middleware/validate';
import { userValidation } from '../validations';

const router = Router();

router.post('/signup', validate(userValidation.signUp), signUp);
router.post('/login', validate(userValidation.login), login);

export { router };
