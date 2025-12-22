import express from "express";
import {
    getMenus,
    createMenu,
    deleteMenu,
    toggleAvailability,
    updateMenu,
} from "../controllers/menu.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.js"; 
import MenuItem from "../models/MenuItem.js";


const router = express.Router();

router.get("/admin", protectAdmin, getMenus);


router.post(
    "/admin",
    protectAdmin,
    upload.single("image"), 
    createMenu
);
router.put(
    "/admin/:id",
    protectAdmin,
    upload.single("image"),
    updateMenu
);
router.delete("/admin/:id", protectAdmin, deleteMenu);
router.put("/admin/:id/toggle", protectAdmin, toggleAvailability);



router.get("/public", async (req, res) => {
    const items = await MenuItem.find({ isAvailable: true })
        .sort({ category: 1, createdAt: -1 });

    res.json(items);
});


export default router;
