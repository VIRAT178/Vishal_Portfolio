import express from 'express';
import { submitContactForm } from './contectController.js';


const router = express.Router();

router.post('/contact', submitContactForm);

export default router;
