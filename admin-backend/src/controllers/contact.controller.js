import Contact from "../models/Contact.js";

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

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

/* UPDATE STATUS */
export const updateContactStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!["new", "contacted", "closed"].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

/* DELETE CONTACT */
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({ message: "Contact deleted" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

/* ADMIN – MARK CONTACTED */
export const markContacted = async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { status: "contacted" },
        { new: true }
    );
    res.json(contact);
};

/* ADMIN – MARK CLOSED */
export const markClosed = async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { status: "closed" },
        { new: true }
    );
    res.json(contact);
};

