import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const protectAdmin = async (req, res, next) => {
    try {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.admin = await Admin.findById(decoded.id).select("-password");

        if (!req.admin) {
            return res.status(401).json({ message: "Admin not found" });
        }

        next();
    } catch (error) {
        console.error("AUTH ERROR:", error);
        res.status(401).json({ message: "Not authorized" });
    }
};
