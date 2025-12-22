import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "maple-banquet/gallery",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
    },
});

const uploadGallery = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

export default uploadGallery;
