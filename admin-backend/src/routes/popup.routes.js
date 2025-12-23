import express from "express";
import upload from "../middleware/upload.js";
import { protectAdmin } from "../middleware/auth.middleware.js";
import {
    getPublicPopups,
    getAdminPopups,
    createPopup,
    togglePopup,
    deletePopup,
    togglePopupFeature,
} from "../controllers/popup.controller.js";

const router = express.Router();


router.get("/", getPublicPopups);


router.get("/admin", protectAdmin, getAdminPopups);
router.post("/admin", protectAdmin, upload.single("image"), createPopup);


router.patch(
    "/admin/settings/toggle",
    protectAdmin,
    togglePopupFeature
);

router.patch("/admin/:id/toggle", protectAdmin, togglePopup);
router.delete("/admin/:id", protectAdmin, deletePopup);

export default router;
