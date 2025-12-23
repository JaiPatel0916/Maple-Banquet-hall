import { useEffect, useState } from "react";
import axios from "../api/axios";

const MenuManagement = () => {
    const [menus, setMenus] = useState([]);
    const [editItem, setEditItem] = useState(null);

    const [form, setForm] = useState({
        name: "",
        category: "",
        type: "Veg",
        image: null,
    });
    const CATEGORIES = [
        "Starters",
        "Main Course",
        "Snacks",
        "Desserts",
        "Beverages",
    ];


    const fetchMenus = async () => {
        const { data } = await axios.get("/menu/admin");
        setMenus(data);
    };

    useEffect(() => {
        fetchMenus();
    }, []);

    const addMenu = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("category", form.category);
        formData.append("type", form.type);
        formData.append("image", form.image);

        await axios.post("/menu/admin", formData);
        setForm({ name: "", category: "", type: "Veg", image: null });
        fetchMenus();
    };

    
    const toggleAvailability = async (id) => {
        await axios.put(`/menu/admin/${id}/toggle`);
        fetchMenus();
    };

    const deleteMenu = async (id) => {
        if (!window.confirm("Delete this menu item?")) return;
        await axios.delete(`/menu/admin/${id}`);
        fetchMenus();
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Outdoor Catering Menu</h2>

            <form
                onSubmit={addMenu}
                className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-5 
    gap-4 
    bg-gray-50 
    p-4 
    rounded 
    mb-6
  "
            >
        
                <input
                    required
                    placeholder="Item Name"
                    className="border p-2 rounded w-full"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

         
                <select
                    required
                    className="border p-2 rounded w-full"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                    <option value="">Select Category</option>
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

             
                <select
                    className="border p-2 rounded w-full"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                    <option>Veg</option>
                    <option>Non-Veg</option>
                </select>

            
                <input
                    type="file"
                    required
                    className="w-full text-sm"
                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                />

   
                <button
                    type="submit"
                    className="
      bg-green-600 
      text-white 
      rounded 
      px-4 
      py-2 
      w-full 
      sm:col-span-2 
      lg:col-span-1
      hover:bg-green-700
      transition
    "
                >
                    Add Item
                </button>
            </form>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Type</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {menus.map((m) => (
                            <tr
                                key={m._id}
                                className="border-t hover:bg-gray-50 transition"
                            >
                                <td className="p-3">
                                    <img
                                        src={m.image}
                                        alt={m.name}
                                        className="w-16 h-16 object-cover rounded-md border"
                                    />
                                </td>

                                <td className="p-3 font-medium">
                                    {m.name}
                                </td>

                                <td className="p-3">
                                    {m.category}
                                </td>

                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium
                                ${m.type === "Veg"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {m.type}
                                    </span>
                                </td>

                                <td className="p-3">
                                    <span
                                        className={`font-medium
                                ${m.isAvailable
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {m.isAvailable ? "Available" : "Unavailable"}
                                    </span>
                                </td>

                                <td className="p-3">
                                    <div className="flex justify-center gap-2">
                                        <button
                                            onClick={() => toggleAvailability(m._id)}
                                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded text-xs"
                                        >
                                            Toggle
                                        </button>

                                        <button
                                            onClick={() => setEditItem(m)}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => deleteMenu(m._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
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

            {editItem && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded w-full max-w-md">
                        <h3 className="text-lg font-bold mb-4">Edit Menu Item</h3>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const formData = new FormData();
                                formData.append("name", editItem.name);
                                formData.append("category", editItem.category);
                                formData.append("type", editItem.type);

                                if (editItem.newImage) {
                                    formData.append("image", editItem.newImage);
                                }

                                await axios.put(`/menu/admin/${editItem._id}`, formData);
                                setEditItem(null);
                                fetchMenus();
                            }}
                            className="space-y-3"
                        >
                            <input
                                className="border p-2 rounded w-full"
                                value={editItem.name}
                                onChange={(e) =>
                                    setEditItem({ ...editItem, name: e.target.value })
                                }
                                required
                            />

                            <select
                                className="border p-2 rounded w-full"
                                value={editItem.category}
                                onChange={(e) =>
                                    setEditItem({ ...editItem, category: e.target.value })
                                }
                            >
                                {CATEGORIES.map((cat) => (
                                    <option key={cat}>{cat}</option>
                                ))}
                            </select>

                            <select
                                className="border p-2 rounded w-full"
                                value={editItem.type}
                                onChange={(e) =>
                                    setEditItem({ ...editItem, type: e.target.value })
                                }
                            >
                                <option>Veg</option>
                                <option>Non-Veg</option>
                            </select>

                            <img
                                src={editItem.image}
                                alt="preview"
                                className="w-24 h-24 object-cover rounded"
                            />

                            <input
                                type="file"
                                onChange={(e) =>
                                    setEditItem({
                                        ...editItem,
                                        newImage: e.target.files[0],
                                    })
                                }
                            />

                            <div className="flex gap-3 justify-end">
                                <button
                                    type="button"
                                    onClick={() => setEditItem(null)}
                                    className="px-4 py-2 bg-gray-400 text-white rounded"
                                >
                                    Cancel
                                </button>

                                <button className="px-4 py-2 bg-green-600 text-white rounded">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MenuManagement;
