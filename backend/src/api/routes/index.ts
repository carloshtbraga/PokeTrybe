import { Router } from 'express';
import peopleRouter from './people.router';
import skillRouter from './skills.router';

const router = Router();

router.use('/trybers', peopleRouter);
router.use('/skills', skillRouter);
// router.use('/class', classRouter)

export default router;
