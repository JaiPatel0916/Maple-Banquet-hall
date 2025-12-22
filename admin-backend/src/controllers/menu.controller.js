import MenuItem from "../models/MenuItem.js";

/* CREATE MENU ITEM */
export const createMenu = async (req, res) => {
    try {
        const { name, category, type } = req.body;

        if (!name || !category || !type || !req.file) {
            return res.status(400).json({ message: "All fields required" });
        }

        const item = await MenuItem.create({
            name,
            category,
            type,
            image: req.file.path, // Cloudinary URL
        });

        res.status(201).json(item);
    } catch (err) {
        console.error("CREATE MENU ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
};

/* GET ALL MENU ITEMS */
export const getMenus = async (req, res) => {
    const items = await MenuItem.find().sort({ createdAt: -1 });
    res.json(items);
};

/* TOGGLE AVAILABILITY */
export const toggleAvailability = async (req, res) => {
    try {
        const menu = await MenuItem.findById(req.params.id);
        if (!menu) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        menu.isAvailable = !menu.isAvailable;
        await menu.save();

        res.json({
            message: "Availability updated",
            isAvailable: menu.isAvailable,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

/* DELETE MENU ITEM */
export const deleteMenu = async (req, res) => {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu item deleted" });
};

/* UPDATE MENU ITEM */
export const updateMenu = async (req, res) => {
    try {
        const { name, category, type } = req.body;

        const menu = await MenuItem.findById(req.params.id);
        if (!menu) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        // Update fields
        menu.name = name || menu.name;
        menu.category = category || menu.category;
        menu.type = type || menu.type;

        // If new image uploaded, replace image
        if (req.file) {
            menu.image = req.file.path; // new Cloudinary URL
        }

        await menu.save();

        res.json({
            message: "Menu item updated successfully",
            menu,
        });
    } catch (err) {
        console.error("UPDATE MENU ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
};

