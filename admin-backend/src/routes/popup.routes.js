    import express from "express";
    import uploadPopup from "../middleware/uploadPopup.js";
    import { protectAdmin } from "../middleware/auth.middleware.js";
    import {
        getPublicPopups,
        getAdminPopups,
        createPopup,
        deletePopup,
        togglePopupFeature,
        restorePopup,
        hardDeletePopup,
    } from "../controllers/popup.controller.js";

    const router = express.Router(); // ✅ THIS WAS MISSING

    /* PUBLIC */
    router.get("/", getPublicPopups);

    /* ADMIN */
    router.get("/admin", protectAdmin, getAdminPopups);

    router.post(
        "/admin",
        protectAdmin,
        uploadPopup.single("image"),
        createPopup
    );

    router.patch(
        "/admin/settings/toggle",
        protectAdmin,
        togglePopupFeature
    );

    router.patch(
        "/admin/:id/restore",
        protectAdmin,
        restorePopup
    );

    router.delete(
        "/admin/:id/hard",
        protectAdmin,
        hardDeletePopup
    );

    router.delete(
        "/admin/:id",
        protectAdmin,
        deletePopup
    );

    export default router;
