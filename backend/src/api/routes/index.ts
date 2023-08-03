import { Router } from 'express';
import peopleRouter from './people.router';

const router = Router();

router.use('/trybers', peopleRouter);

export default router;
