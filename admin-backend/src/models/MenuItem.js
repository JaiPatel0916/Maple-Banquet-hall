import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        type: { type: String, enum: ["Veg", "Non-Veg"], required: true },
        image: { type: String, required: true },    
        isAvailable: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model("MenuItem", menuItemSchema);
