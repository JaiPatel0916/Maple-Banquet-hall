import { useEffect, useState } from "react";
import api from "../../api/axios";
import MenuCard from "./MenuCard";
import { useOutdoorCatering } from "../../context/OutdoorCateringContext";

const MenuStep = () => {
    const { selectedItems, toggleItem, setStep } = useOutdoorCatering();

    const [menus, setMenus] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");

    /* FETCH MENU ITEMS */
    useEffect(() => {
        const fetchMenus = async () => {
            const { data } = await api.get("/menu/public");

            // Hide unavailable items
            const availableItems = data.filter(item => item.isAvailable);

            setMenus(availableItems);

            // Extract categories + prepend "All"
            const uniqueCategories = [
                "All",
                ...new Set(availableItems.map(item => item.category)),
            ];

            setCategories(uniqueCategories);
            setActiveCategory("All");
        };

        fetchMenus();
    }, []);

    /* FILTER ITEMS */
    const filteredMenus =
        activeCategory === "All"
            ? menus
            : menus.filter(item => item.category === activeCategory);

    const isSelected = (id) =>
        selectedItems.some(item => item.id === id);

    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-3xl font-serif text-center mb-10">
                    Select Your Menu
                </h2>

                {/* CATEGORY TABS */}
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full border text-sm transition
                                ${activeCategory === cat
                                    ? "bg-[#6e1b1b] text-white border-[#6e1b1b]"
                                    : "hover:bg-[#f6f2ee]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* MENU GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredMenus.map(item => (
                        <MenuCard
                            key={item._id}
                            item={item}
                            selected={isSelected(item._id)}
                            onToggle={() =>
                                toggleItem({
                                    id: item._id,
                                    name: item.name,
                                })
                            }
                        />
                    ))}
                </div>

                {/* FOOTER ACTIONS */}
                <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4 max-w-3xl mx-auto">
                    <button
                        onClick={() => setStep(1)}
                        className="w-full sm:w-auto border px-6 py-2 rounded-lg text-sm"
                    >
                        ← Change Guest Count
                    </button>

                    <button
                        disabled={selectedItems.length === 0}
                        onClick={() => setStep(3)}
                        className="w-full sm:w-auto bg-[#d29922] px-8 py-3 rounded-lg font-medium disabled:opacity-40"
                    >
                        Continue →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default MenuStep;
