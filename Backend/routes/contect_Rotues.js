import express from "express";
import { createContact } from "../controllers/contectController.js";


const router = express.Router();

router.post("/contectme", createContact);

export default router;
