import { Router } from 'express';
import { signUp, login, getMyProfile, getAdmins, getAdminById, deleteAdminById, updateAdminById } from '../controllers/admin';
import { validate } from '../middleware/validate';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { adminValidation } from '../validations';

const router = Router();

router.post('/signup', validate(adminValidation.signUp), signUp);
router.post('/login', validate(adminValidation.login), login);
router.get('/profile', isAuthenticated('admin'), getMyProfile);
router.get('/', isAuthenticated('admin'), getAdmins);
router.get('/:id', isAuthenticated('admin'), getAdminById);
router.delete('/:id', isAuthenticated('admin'), deleteAdminById);
router.put('/:id', validate(adminValidation.update), isAuthenticated('admin'), updateAdminById);

export { router };
