import express from "express";
import { loginAdmin, createAdmin } from "../controllers/admin.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", loginAdmin);


router.post("/create", protectAdmin, createAdmin);

export default router;
