import { Router, type Request, type Response } from 'express';
import PersonController from '../controllers/Person.controller';

const peopleController = new PersonController();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    peopleController.getAll(req, res);
});

export default router;
