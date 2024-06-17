import { Router } from 'express';
import { getHomeDetails } from '../controllers/home';

const router = Router();

router.get('/', getHomeDetails);

export { router };
