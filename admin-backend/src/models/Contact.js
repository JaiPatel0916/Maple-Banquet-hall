import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
        },

        phone: {
            type: String,
            required: true,
        },

        eventDate: {
            type: Date,
            required: true,
        },

        eventType: {
            type: String,
        },

        guests: {
            type: String,
            required: true,
        },

        message: {
            type: String,
        },

        status: {
            type: String,
            enum: ["new", "contacted", "closed"],
            default: "new",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
