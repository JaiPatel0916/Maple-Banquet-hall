import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import adminRoutes from "./routes/admin.routes.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Admin backend running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Admin server running on port ${PORT}`);
});
