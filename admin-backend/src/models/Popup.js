import mongoose from "mongoose";

const popupSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true, // Cloudinary URL
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Popup", popupSchema);
