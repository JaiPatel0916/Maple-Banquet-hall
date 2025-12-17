import { useState } from "react";
import { MENU_DATA } from "../../data/outdoorMenuData";
import MenuCard from "./MenuCard";

import { useOutdoorCatering } from "../../context/OutdoorCateringContext";

const MenuStep = () => {
    const categories = Object.keys(MENU_DATA);
    const [active, setActive] = useState(categories[0]);

    const { selectedItems, toggleItem, setStep } =
        useOutdoorCatering();

    return (
        <section className="py-14">
            <h2 className="text-center text-2xl md:text-3xl font-serif mb-8">
                Select Your Menu
            </h2>

            {/* Categories */}
            <div className="flex gap-2 justify-center flex-wrap mb-10 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-1.5 rounded-full border text-sm transition
              ${active === cat
                                ? "bg-[#6e1b1b] text-white border-[#6e1b1b]"
                                : "bg-white hover:bg-[#f6f2ee]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-4">
                {MENU_DATA[active].map((item) => {
                    const selected = selectedItems.some(
                        (i) => i.id === item.id
                    );

                    return (
                        <MenuCard
                            key={item.id}
                            item={item}
                            selected={selected}
                            onToggle={() => toggleItem(item)}
                        />
                    );
                })}
            </div>


            {/* Bottom Bar */}
            <div className="mt-14 flex justify-between items-center max-w-6xl mx-auto px-4">
                <button
                    onClick={() => setStep(1)}
                    className="border px-5 py-2 rounded-lg text-sm"
                >
                    ← Change Guest Count
                </button>

                <button
                    onClick={() => setStep(3)}
                    className="bg-[#d29922] px-6 py-2.5 rounded-lg font-medium text-sm"
                >
                    Proceed to Enquiry →
                </button>
            </div>
        </section>
    );
};

export default MenuStep;
