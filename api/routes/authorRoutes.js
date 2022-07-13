import express from 'express';
import { authorController } from '../controllers/index.js';
import { validateAuthor } from '../middleware/index.js';

const router = express.Router();

router
  .route('/authors')
  .get(authorController.getAllAuthors)
  .post(validateAuthor, authorController.createAuthor);

router
  .route('/authors/:id')
  .get(authorController.getAuthorById)
  .put(authorController.updateAuthorById)
  .delete(authorController.deleteAuhorById);

export default router;
