import express from "express";
import {
    createContact,
    getAllContacts,
    updateContactStatus,
    deleteContact,
} from "../controllers/contact.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

/* PUBLIC */
router.post("/", createContact);

/* ADMIN */
router.get("/admin", protectAdmin, getAllContacts);
router.patch("/admin/:id/status", protectAdmin, updateContactStatus);
router.delete("/admin/:id", protectAdmin, deleteContact);

export default router;
