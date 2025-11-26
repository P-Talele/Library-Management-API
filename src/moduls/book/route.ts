
import { Router } from 'express';
import { BookController } from './controller';

import { validateDTO } from '../../middleware/validate.middleware';
import { CreateBookDTO, UpdateBookDTO, dleteBookDTO } from './dto/create-book';


const router = Router();
const controller = new BookController();

router.post('/create-book', validateDTO(CreateBookDTO), (req, res) => controller.create(req, res));
router.get('/book-list', (req, res) => controller.booklist(req, res));
router.patch('/book-update', validateDTO(UpdateBookDTO), (req, res) => controller.UpdateBook(req, res));
router.delete('/delete', validateDTO(dleteBookDTO), (req, res) => controller.DeleteBook(req, res));


export default router;