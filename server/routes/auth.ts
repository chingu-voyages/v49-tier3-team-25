import { Router } from 'express';
import { signUp, login } from '../controllers/auth';
import { validate } from '../middleware/validate';
import { authValidation } from '../validations';

const router = Router();

router.put('/signup', validate(authValidation.signUp), signUp);
router.post('/login', validate(authValidation.login), login);

export { router };
