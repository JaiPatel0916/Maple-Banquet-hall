import Contact from "../models/Contact.js";

/* CREATE CONTACT (PUBLIC) */
export const createContact = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            date,
            eventType,
            guests,
            message,
        } = req.body;

        if (!name || !phone || !date || !guests) {
            return res.status(400).json({
                message: "Required fields missing",
            });
        }

        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const oneYearLater = new Date();
        oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);

        if (selectedDate < today) {
            return res.status(400).json({
                message: "Past dates not allowed",
            });
        }

        if (selectedDate > oneYearLater) {
            return res.status(400).json({
                message: "Date beyond 1 year not allowed",
            });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            eventDate: selectedDate,
            eventType,
            guests,
            message,
        });

        res.status(201).json({
            message: "Inquiry submitted successfully",
            contactId: contact._id,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

/* GET ALL CONTACTS (ADMIN ONLY) */
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
