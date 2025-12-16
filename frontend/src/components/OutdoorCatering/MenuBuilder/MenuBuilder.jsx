import { useState } from "react";
import CategoryList from "./CategoryList";
import MenuItems from "./MenuItems";
import SelectionSummary from "./SelectionSummary";

const MenuBuilder = () => {
    const [activeCategory, setActiveCategory] = useState("Soups");
    const [cart, setCart] = useState({});

    return (
        <section className="bg-[#FFFFF] py-24">
            <h2 className="mb-8 text-3xl font-serif font-semibold text-[#6e1b1b] text-center pb-8">
                Build Your Perfect Menu
            </h2>

            
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-8">

                <CategoryList
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <MenuItems
                    activeCategory={activeCategory}
                    cart={cart}
                    setCart={setCart}
                />

                <SelectionSummary cart={cart} />
            </div>
        </section>
    );
};

export default MenuBuilder;
