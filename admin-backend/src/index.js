import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/admin.routes.js";
import contactRoutes from "./routes/contact.routes.js";

import packageRoutes from"./routes/packageRoutes.js";


import menuRoutes from "./routes/menu.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";
import popupRoutes from "./routes/popup.routes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

app.use("/api/packages", packageRoutes);

app.use("/api/menu", menuRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/popup", popupRoutes);



app.get("/", (req, res) => {
    res.send("Admin backend running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Admin server running on port ${PORT}`);
});
