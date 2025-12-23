import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    guests: String,
    description: String,
    features: [String],

    category: {
      type: String,
      enum: ["silver", "golden", "platinum"],
      required: true,
    },

    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Package", packageSchema);
