import GalleryImage from "../models/GalleryImage.js";

/* ADMIN: GET ALL */
export const getAdminGallery = async (req, res) => {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json(images);
};

/* PUBLIC: GET ALL */
export const getPublicGallery = async (req, res) => {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json(images);
};

/* ADMIN: CREATE */
export const createGalleryImage = async (req, res) => {
    try {
        if (!req.file || !req.body.category) {
            return res.status(400).json({ message: "Image & category required" });
        }

        const image = await GalleryImage.create({
            image: req.file.path,
            category: req.body.category,
        });

        res.status(201).json(image);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

/* ADMIN: UPDATE */
export const updateGalleryImage = async (req, res) => {
    try {
        const image = await GalleryImage.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        if (req.body.category) {
            image.category = req.body.category;
        }

        if (req.file) {
            image.image = req.file.path;
        }

        await image.save();
        res.json(image);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

/* ADMIN: DELETE */
export const deleteGalleryImage = async (req, res) => {
    await GalleryImage.findByIdAndDelete(req.params.id);
    res.json({ message: "Image deleted" });
};
