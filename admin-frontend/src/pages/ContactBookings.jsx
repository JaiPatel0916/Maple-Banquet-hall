import { useEffect, useState } from "react";
import axios from "../api/axios";

const ContactBookings = () => {
    const [contacts, setContacts] = useState([]);
    const [selected, setSelected] = useState(null);

    /* DATE FILTER STATE */
    const [filter, setFilter] = useState("all");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

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

    /* STATUS UPDATE */
    const updateStatus = async (id, status) => {
        await axios.patch(`/contact/admin/${id}/status`, { status });
        fetchContacts();
    };

    /* DELETE */
    const deleteContact = async (id) => {
        if (!window.confirm("Delete this inquiry?")) return;
        await axios.delete(`/contact/admin/${id}`);
        fetchContacts();
    };

    /* BADGE COLOR */
    const badgeColor = (status) => {
        if (status === "new") return "bg-yellow-200";
        if (status === "contacted") return "bg-blue-200";
        return "bg-green-200";
    };

    /* DATE FILTER LOGIC */
    const filteredContacts = contacts.filter((c) => {
        const contactDate = new Date(c.eventDate);
        const today = new Date();

        if (filter === "today") {
            return contactDate.toDateString() === today.toDateString();
        }

        if (filter === "7days") {
            const last7 = new Date();
            last7.setDate(today.getDate() - 7);
            return contactDate >= last7;
        }

        if (filter === "month") {
            return (
                contactDate.getMonth() === today.getMonth() &&
                contactDate.getFullYear() === today.getFullYear()
            );
        }

        if (filter === "custom" && fromDate && toDate) {
            return (
                contactDate >= new Date(fromDate) &&
                contactDate <= new Date(toDate)
            );
        }

        return true; // all
    });

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Inquiries</h2>

            {/* FILTER BAR */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border rounded px-3 py-2 text-sm"
                >
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="7days">Last 7 Days</option>
                    <option value="month">This Month</option>
                    <option value="custom">Custom Range</option>
                </select>

                {filter === "custom" && (
                    <>
                        <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="border rounded px-3 py-2 text-sm"
                        />
                        <input
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="border rounded px-3 py-2 text-sm"
                        />
                    </>
                )}
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm min-w-[900px]">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border text-left">Name</th>
                            <th className="p-3 border text-left">Phone</th>
                            <th className="p-3 border text-left">Event</th>
                            <th className="p-3 border text-center">Date</th>
                            <th className="p-3 border text-center">Status</th>
                            <th className="p-3 border text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredContacts.map((c) => (
                            <tr key={c._id} className="hover:bg-gray-50">
                                <td className="p-3 border">{c.name}</td>
                                <td className="p-3 border">{c.phone}</td>
                                <td className="p-3 border">{c.eventType || "-"}</td>
                                <td className="p-3 border text-center">
                                    {new Date(c.eventDate).toLocaleDateString()}
                                </td>
                                <td className="p-3 border text-center">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${badgeColor(
                                            c.status
                                        )}`}
                                    >
                                        {c.status}
                                    </span>
                                </td>
                                <td className="p-3 border">
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <button
                                            onClick={() => setSelected(c)}
                                            className="px-3 py-1 bg-blue-500 text-white rounded text-xs"
                                        >
                                            View
                                        </button>

                                        {c.status === "new" && (
                                            <button
                                                onClick={() =>
                                                    updateStatus(c._id, "contacted")
                                                }
                                                className="px-3 py-1 bg-indigo-600 text-white rounded text-xs"
                                            >
                                                Contacted
                                            </button>
                                        )}

                                        {c.status !== "closed" && (
                                            <button
                                                onClick={() =>
                                                    updateStatus(c._id, "closed")
                                                }
                                                className="px-3 py-1 bg-green-600 text-white rounded text-xs"
                                            >
                                                Close
                                            </button>
                                        )}

                                        <button
                                            onClick={() => deleteContact(c._id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded text-xs"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* VIEW MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
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
