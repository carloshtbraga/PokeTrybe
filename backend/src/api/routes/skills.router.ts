import { Router, type Request, type Response } from 'express';
import SkillsController from '../controllers/Skills.controller';

const skillsController = new SkillsController();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    skillsController.getAll(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    skillsController.getSkillById(req, res);
});

export default router;
