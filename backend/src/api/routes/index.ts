import { Router } from 'express';
import peopleRouter from './people.router';

const router = Router();

router.use('/people', peopleRouter);

export default router;
