import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";


const API = "http://localhost:5001/api/packages";

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [limitMessage, setLimitMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    guests: "",
    description: "",
    features: [""],
    category: "",
    isPopular: false,
  });

  /* ================= FETCH ================= */
  const fetchPackages = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setPackages(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);
/* ================= INPUT CHANGE (MISSING) ================= */
const handleChange = (e) => {
  const { name, value, checked, type } = e.target;
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};
/* ================= FEATURES HANDLERS (FIX) ================= */
const handleFeatureChange = (i, value) => {
  const updated = [...formData.features];
  updated[i] = value;
  setFormData({ ...formData, features: updated });
};

const addFeature = () => {
  setFormData({
    ...formData,
    features: [...formData.features, ""],
  });
};

const removeFeature = (i) => {
  setFormData({
    ...formData,
    features: formData.features.filter((_, idx) => idx !== i),
  });
};


  /* ================= INPUT ================= */
  const handleSubmit = async (e) => {
  e.preventDefault();

  // count BEFORE add
  const sameCategoryCount = packages.filter(
    (p) => p.category === formData.category
  ).length;

  const isAddingNew = !editingId;

  const payload = {
    ...formData,
    price: Number(formData.price),
    features: formData.features.filter((f) => f.trim() !== ""),
  };

  const url = editingId ? `${API}/${editingId}` : API;

  // ✅ PACKAGE ADD / UPDATE (ALWAYS)
  await fetch(url, {
    method: editingId ? "PUT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // 🔔 WARNING ONLY FOR 4th ADD
  if (isAddingNew && sameCategoryCount >= 3) {
    setLimitMessage(
      "⚠️ Package added successfully, but only first 3 will be visible on Website."
    );

    // 🔥 form open rakho, sirf fields reset karo
    setFormData({
      name: "",
      price: "",
      guests: "",
      description: "",
      features: [""],
      category: "",
      isPopular: false,
    });

    fetchPackages();
    return;
  }

  // ✅ NORMAL FLOW
  setLimitMessage("");
  setShowForm(false);
  setEditingId(null);
  setFormData({
    name: "",
    price: "",
    guests: "",
    description: "",
    features: [""],
    category: "",
    isPopular: false,
  });

  fetchPackages();
};


  /* ================= EDIT / DELETE ================= */
  const handleEdit = (pkg) => {
    setEditingId(pkg._id);
    setFormData({
      name: pkg.name,
      price: pkg.price,
      guests: pkg.guests,
      description: pkg.description,
      features: pkg.features?.length ? pkg.features : [""],
      category: pkg.category,
      isPopular: pkg.isPopular,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this package?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchPackages();
  };

  /* ================= CATEGORY COLORS ================= */
  const categoryBadge = (category) => {
    if (category === "silver")
      return "bg-blue-100 text-blue-800 border border-blue-200";
    if (category === "gold")
      return "bg-yellow-100 text-yellow-800 border border-yellow-200";
    return "bg-[#8b5a2b] text-white border border-[#6f3f1d]";
  };

  return (
    <div className="p-4 md:p-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">
          Packages Management
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#D29922] px-2 py-1 rounded-md flex gap-1 items-center text-sm font-semibold"
        >
          <Plus size={16} /> Add Package
        </button>
      </div>

      {/* ================= FORM ================= */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-[#f9f6ef] p-4 md:p-6 rounded-xl space-y-4 mb-8"
        >
          {/* WARNING MESSAGE */}
          {limitMessage && (
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded text-sm font-semibold">
              ⚠️ {limitMessage}
            </div>
          )}

          <input
            name="name"
            placeholder="Package Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              name="guests"
              placeholder="Guests (Up to 100)"
              value={formData.guests}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />

          {/* FEATURES */}
          <div>
            <p className="font-semibold mb-2 text-sm">Features</p>
            {formData.features.map((f, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  value={f}
                  onChange={(e) =>
                    handleFeatureChange(i, e.target.value)
                  }
                  className="border p-2 w-full rounded"
                />
                <button
                  type="button"
                  onClick={() => removeFeature(i)}
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="text-sm text-[#D29922]"
            >
              + Add Feature
            </button>
          </div>

          {/* CATEGORY */}
          <div className="flex gap-6 text-sm font-semibold">
            {["silver", "gold", "platinum"].map((c) => (
              <label key={c} className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="category"
                  value={c}
                  checked={formData.category === c}
                  onChange={handleChange}
                  required
                />
                {c.toUpperCase()}
              </label>
            ))}
          </div>

          {/* MOST POPULAR */}
          <label className="flex gap-2 items-center font-semibold text-sm text-[#4b2e1e]">
            <input
              type="checkbox"
              name="isPopular"
              checked={formData.isPopular}
              onChange={handleChange}
            />
            Mark as Most Popular
          </label>

          <div className="flex gap-3">
  <button
    type="submit"
    className="bg-[#D29922] px-6 py-2 rounded font-semibold"
  >
    {editingId ? "Update Package" : "Add Package"}
  </button>

  {editingId && (
    <button
      type="button"
      onClick={() => {
        setShowForm(false);
        setEditingId(null);
        setLimitMessage("");
        setFormData({
          name: "",
          price: "",
          guests: "",
          description: "",
          features: [""],
          category: "",
          isPopular: false,
        });
      }}
      className="border border-gray-400 px-6 py-2 rounded font-semibold"
    >
      Back
    </button>
  )}
</div>

        </form>
      )}

      {/* ================= PACKAGE GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg._id}
            className={`relative bg-[#fffaf3] rounded-xl p-4 md:p-5 border
              ${
                pkg.isPopular
                  ? "border-2 border-[#4b2e1e]"
                  : "border-[#eadfce]"
              }`}
          >
            {/* CATEGORY BADGE */}
            <span
              className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryBadge(
                pkg.category
              )}`}
            >
              {pkg.category.toUpperCase()}
            </span>

            {/* MOST POPULAR */}
            {pkg.isPopular && (
              <span className="absolute -top-3 right-4 bg-[#4b2e1e] text-white text-xs px-3 py-1 rounded-full font-semibold">
                Most Popular
              </span>
            )}

            {/* ACTIONS */}
            <div className="absolute top-4 right-4 flex gap-3">
              <Pencil
                size={16}
                className="cursor-pointer"
                onClick={() => handleEdit(pkg)}
              />
              <Trash2
                size={16}
                className="cursor-pointer text-red-500"
                onClick={() => handleDelete(pkg._id)}
              />
            </div>

            <h3 className="text-base font-semibold mb-4">
              {pkg.name}
            </h3>

            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span><b>Price</b></span>
                <span className="font-semibold text-[#D29922]">
                  ₹{pkg.price}
                </span>
              </div>

              <div className="flex justify-between">
                <span><b>Guests</b></span>
                <span className="font-semibold">{pkg.guests}</span>
              </div>

              <div>
                <span className="block mb-1">
                  <b>Description:</b>
                </span>
                <p className="text-gray-700">
                  {pkg.description}
                </p>
              </div>

              {pkg.features?.length > 0 && (
                <div>
                  <span className="block mb-1">
                    <b>Features:</b>
                  </span>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {pkg.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPackages;
