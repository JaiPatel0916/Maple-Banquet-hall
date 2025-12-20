import { useEffect, useState } from "react";
import axios from "../api/axios";

const ContactBookings = () => {
    const [contacts, setContacts] = useState([]);
    const [selected, setSelected] = useState(null);

    const fetchContacts = async () => {
        try {
            const { data } = await axios.get("/contact/admin");
            setContacts(data);
        } catch (err) {
            console.error("Failed to fetch contacts", err);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    // ✅ SINGLE STATUS UPDATE FUNCTION
    const updateStatus = async (id, status) => {
        try {
            await axios.patch(`/contact/admin/${id}/status`, { status });
            fetchContacts();
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const deleteContact = async (id) => {
        if (!window.confirm("Delete this inquiry?")) return;
        try {
            await axios.delete(`/contact/admin/${id}`);
            fetchContacts();
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    const badgeColor = (status) => {
        if (status === "new") return "bg-yellow-200";
        if (status === "contacted") return "bg-blue-200";
        return "bg-green-200";
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Contact Inquiries</h2>

            <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {contacts.map((c) => (
                        <tr key={c._id} className="border-t">
                            <td className="p-2">{c.name}</td>
                            <td>{c.phone}</td>
                            <td>{c.eventType || "-"}</td>
                            <td>{new Date(c.eventDate).toLocaleDateString()}</td>

                            <td>
                                <span
                                    className={`px-2 py-1 rounded text-xs ${badgeColor(c.status)}`}
                                >
                                    {c.status}
                                </span>
                            </td>

                            <td className="flex gap-2 py-2">
                                <button
                                    onClick={() => setSelected(c)}
                                    className="px-3 py-1 bg-blue-500 text-white rounded"
                                >
                                    View
                                </button>

                                {c.status === "new" && (
                                    <button
                                        onClick={() => updateStatus(c._id, "contacted")}
                                        className="px-3 py-1 bg-indigo-600 text-white rounded"
                                    >
                                        Contacted
                                    </button>
                                )}

                                {c.status !== "closed" && (
                                    <button
                                        onClick={() => updateStatus(c._id, "closed")}
                                        className="px-3 py-1 bg-green-600 text-white rounded"
                                    >
                                        Close
                                    </button>
                                )}

                                <button
                                    onClick={() => deleteContact(c._id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* VIEW MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-6 w-[500px] rounded">
                        <h3 className="text-xl font-semibold mb-2">
                            {selected.name}
                        </h3>
                        <p><b>Phone:</b> {selected.phone}</p>
                        <p><b>Email:</b> {selected.email || "-"}</p>
                        <p><b>Guests:</b> {selected.guests}</p>
                        <p className="mt-4"><b>Message:</b></p>
                        <p className="text-gray-700">{selected.message || "-"}</p>

                        <button
                            onClick={() => setSelected(null)}
                            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactBookings;
