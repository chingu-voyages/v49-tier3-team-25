import { Router } from 'express';
import { getDashboardDetails } from '../controllers/dashboard';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = Router();

router.get('/', isAuthenticated('admin'), getDashboardDetails);

export { router };
