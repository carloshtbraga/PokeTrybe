import { Router } from 'express';
import PersonController from '../api/controllers/Person.controller';

const router = Router();

const personController = new PersonController();

router.get('/', (req, res) => personController.getAll(req, res));

export default router;
