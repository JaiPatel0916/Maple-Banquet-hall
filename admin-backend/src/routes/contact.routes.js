import express from "express";
import {
    createContact,
    getAllContacts
} from "../controllers/contact.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

/* PUBLIC – submit contact form */
router.post("/", createContact);

/* ADMIN – get all contacts */
router.get("/admin/contacts", protectAdmin, getAllContacts);

export default router;
