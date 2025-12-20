import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";


export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};


export const createAdmin = async (req, res) => {
    const { email, password } = req.body;

    const exists = await Admin.findOne({ email });
    if (exists) {
        return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
        email,
        password: hashedPassword
    });

    res.status(201).json({
        message: "Admin created successfully",
        admin: { email: admin.email }
    });
};
