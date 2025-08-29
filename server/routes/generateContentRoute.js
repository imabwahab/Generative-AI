import express from 'express'
import { generateContentController } from '../controller/generateController.js';

const generateContentRouter = express.Router();

generateContentRouter.post('/generate', generateContentController);

export default generateContentRouter;