import express from "express";
import {
    createContact,
    getAllContacts
} from "../controllers/contact.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", createContact);
router.get("/admin/contacts", protectAdmin, getAllContacts);
export default router;
