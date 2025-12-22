import express from "express";
import uploadGallery from "../middleware/uploadGallery.js";
import { protectAdmin } from "../middleware/auth.middleware.js";
import {
    getAdminGallery,
    getPublicGallery,
    createGalleryImage,
    updateGalleryImage,
    deleteGalleryImage,
} from "../controllers/gallery.controller.js";

const router = express.Router();

router.get("/", getPublicGallery);

router.get("/admin", protectAdmin, getAdminGallery);

router.post(
    "/admin",
    protectAdmin,
    uploadGallery.single("image"), 
    createGalleryImage
);

router.put(
    "/admin/:id",
    protectAdmin,
    uploadGallery.single("image"), 
    updateGalleryImage
);

router.delete("/admin/:id", protectAdmin, deleteGalleryImage);

export default router;
