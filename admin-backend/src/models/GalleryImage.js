import mongoose from "mongoose";

const galleryImageSchema = new mongoose.Schema(
    {
        image: { type: String, required: true }, 
        category: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("GalleryImage", galleryImageSchema);