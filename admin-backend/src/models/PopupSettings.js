import mongoose from "mongoose";

const popupSettingsSchema = new mongoose.Schema({
    enabled: {
        type: Boolean,
        default: true,
    },
});

export default mongoose.model("PopupSettings", popupSettingsSchema);
