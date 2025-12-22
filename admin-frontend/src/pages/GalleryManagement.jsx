import { useEffect, useState } from "react";
import api from "../api/axios";

const CATEGORIES = ["Halls", "Events", "Outdoor", "Food"];

const GalleryManagement = () => {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState("");
    const [editItem, setEditItem] = useState(null);

    const fetchGallery = async () => {
        const { data } = await api.get("/gallery/admin");
        setImages(data);
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const uploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
        formData.append("category", category);

        await api.post("/gallery/admin", formData);
        setFile(null);
        setCategory("");
        fetchGallery();
    };

    const deleteImage = async (id) => {
        if (!window.confirm("Delete image?")) return;
        await api.delete(`/gallery/admin/${id}`);
        fetchGallery();
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-6">Gallery Management</h2>

            {/* UPLOAD */}
            <form
                onSubmit={uploadImage}
                className="flex flex-wrap gap-4 mb-8"
            >
                <input type="file" required onChange={(e) => setFile(e.target.files[0])} />
                <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border px-3 py-2 rounded"
                >
                    <option value="">Select Category</option>
                    {CATEGORIES.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
                <button className="bg-[#d29922] px-6 py-2 rounded text-black">
                    Upload
                </button>
            </form>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img) => (
                    <div key={img._id} className="border rounded overflow-hidden">
                        <img
                            src={img.image}
                            className="w-full h-48 object-cover"
                            alt=""
                        />
                        <div className="p-2 flex justify-between items-center">
                            <span className="text-xs">{img.category}</span>
                            <button
                                onClick={() => deleteImage(img._id)}
                                className="text-red-500 text-xs"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryManagement;
