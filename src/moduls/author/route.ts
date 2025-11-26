
import { Router } from 'express';
import { AuthorController } from './controller';
import { validateDTO } from '../../middleware/validate.middleware';
import { CreateAuthorDTO } from './dto/createAuthor'
const router = Router();

const controller = new AuthorController();


router.post('/uthor', validateDTO(CreateAuthorDTO), (req, res) => controller.craeteAuthor(req, res));


export default router;