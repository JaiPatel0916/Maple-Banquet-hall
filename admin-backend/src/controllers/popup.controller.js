import Popup from "../models/Popup.js";
import PopupSettings from "../models/PopupSettings.js";

/* ENSURE SETTINGS EXISTS */
const ensureSettings = async () => {
    let settings = await PopupSettings.findOne();
    if (!settings) {
        settings = await PopupSettings.create({ enabled: true });
    }
    return settings;
};

/* PUBLIC: GET ACTIVE POPUPS */
export const getPublicPopups = async (req, res) => {
    const settings = await ensureSettings();

    if (!settings.enabled) {
        return res.json([]);
    }

    const popups = await Popup.find({ isActive: true })
        .sort({ createdAt: -1 });

    res.json(popups);
};

/* ADMIN: GET ALL */
export const getAdminPopups = async (req, res) => {
    const popups = await Popup.find().sort({ createdAt: -1 });
    const settings = await ensureSettings();
    res.json({ popups, settings });
};

/* ADMIN: CREATE */
export const createPopup = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Image required" });
    }

    const popup = await Popup.create({
        image: req.file.path,
    });

    res.status(201).json(popup);
};

/* ADMIN: TOGGLE ACTIVE */
export const togglePopup = async (req, res) => {
    const popup = await Popup.findById(req.params.id);
    if (!popup) {
        return res.status(404).json({ message: "Popup not found" });
    }

    popup.isActive = !popup.isActive;
    await popup.save();

    res.json(popup);
};

/* ADMIN: DELETE */
export const deletePopup = async (req, res) => {
    await Popup.findByIdAndDelete(req.params.id);
    res.json({ message: "Popup deleted" });
};

/* ADMIN: TOGGLE FEATURE */
export const togglePopupFeature = async (req, res) => {
    const settings = await ensureSettings();
    settings.enabled = !settings.enabled;
    await settings.save();
    res.json(settings);
};
