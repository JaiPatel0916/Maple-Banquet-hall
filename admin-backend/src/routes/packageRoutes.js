import express from "express";
import Package from "../models/Package.js";

const router = express.Router();

/* ================= GET ================= */
router.get("/", async (req, res) => {
  try {
    const data = await Package.find().sort({
      category: 1,
      isPopular: -1,
      price: 1,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ================= CREATE ================= */
router.post("/", async (req, res) => {
  try {
    const { category, isPopular } = req.body;

    // category-wise single most popular
    if (isPopular) {
      await Package.updateMany(
        { category },
        { $set: { isPopular: false } }
      );
    }

    const pkg = await Package.create(req.body);
    res.status(201).json(pkg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ================= UPDATE ================= */
router.put("/:id", async (req, res) => {
  try {
    const { category, isPopular } = req.body;
    const { id } = req.params;

    if (isPopular) {
      await Package.updateMany(
        {
          category,
          _id: { $ne: id }, // ⬅ exclude current
        },
        { $set: { isPopular: false } }
      );
    }

    const updated = await Package.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ================= DELETE ================= */
router.delete("/:id", async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
