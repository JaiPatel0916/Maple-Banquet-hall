import mongoose from "mongoose";

const popupSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false, 
        },
    },
    { timestamps: true }
);

export default mongoose.model("Popup", popupSchema);
