import Popup from "../models/Popup.js";
import PopupSettings from "../models/PopupSettings.js";


const ensureSettings = async () => {
    let settings = await PopupSettings.findOne();
    if (!settings) {
        settings = await PopupSettings.create({ enabled: true });
    }
    return settings;
};

export const getPublicPopups = async (req, res) => {
    const settings = await ensureSettings();

    if (!settings.enabled) {
        return res.json([]);
    }

    const popup = await Popup.findOne({
        isActive: true,
        isDeleted: false,
    }).sort({ createdAt: -1 });

    res.json(popup ? [popup] : []);
};



export const getAdminPopups = async (req, res) => {
    const settings = await ensureSettings();

    const active = await Popup.find({
        isDeleted: false,
        isActive: true,
    });

    const trash = await Popup.find({
        isDeleted: true,
    }).sort({ createdAt: -1 });

    res.json({
        active,
        trash,
        settings,
    });
};

export const createPopup = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Image required" });
    }

    await Popup.updateMany(
        { isActive: true, isDeleted: false },
        { isActive: false, isDeleted: true }
    );


    const popup = await Popup.create({
        image: req.file.path,
        isActive: true,
    });

    res.status(201).json(popup);
};


export const togglePopup = async (req, res) => {
    const popup = await Popup.findById(req.params.id);
    if (!popup) {
        return res.status(404).json({ message: "Popup not found" });
    }

    popup.isActive = !popup.isActive;
    await popup.save();

    res.json(popup);
};


export const deletePopup = async (req, res) => {
    const popup = await Popup.findById(req.params.id);
    if (!popup) return res.status(404).json({ message: "Popup not found" });

    popup.isActive = false;
    popup.isDeleted = true;
    await popup.save();

    res.json({ message: "Moved to trash" });
};


export const togglePopupFeature = async (req, res) => {
    const settings = await ensureSettings();
    settings.enabled = !settings.enabled;
    await settings.save();
    res.json(settings);
};


export const restorePopup = async (req, res) => {
    
    await Popup.updateMany(
        { isActive: true, isDeleted: false },
        { isActive: false, isDeleted: true }
    );

    const popup = await Popup.findById(req.params.id);
    if (!popup) {
        return res.status(404).json({ message: "Popup not found" });
    }

    popup.isDeleted = false;
    popup.isActive = true;
    await popup.save();

    res.json(popup);
};

export const hardDeletePopup = async (req, res) => {
    await Popup.findByIdAndDelete(req.params.id);
    res.json({ message: "Popup permanently deleted" });
};
