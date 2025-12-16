const MENU_DATA = {
    Starters: [
        { id: 101, name: "Paneer Tikka", price: 250, type: "Veg" },
        { id: 102, name: "Veg Seekh Kebab", price: 220, type: "Veg" },
        { id: 103, name: "Chicken Seekh Kebab", price: 300, type: "Non-Veg" },
        { id: 104, name: "Fish Amritsari", price: 350, type: "Non-Veg" },
    ],

    Soups: [
        { id: 201, name: "Tomato Shorba", price: 120, type: "Veg" },
        { id: 202, name: "Hot & Sour Soup", price: 140, type: "Veg" },
        { id: 203, name: "Chicken Clear Soup", price: 160, type: "Non-Veg" },
        { id: 204, name: "Manchow Soup", price: 150, type: "Veg" },
    ],

    "Main Course": [
        { id: 301, name: "Paneer Butter Masala", price: 280, type: "Veg" },
        { id: 302, name: "Veg Kolhapuri", price: 260, type: "Veg" },
        { id: 303, name: "Butter Chicken", price: 340, type: "Non-Veg" },
        { id: 304, name: "Chicken Curry", price: 320, type: "Non-Veg" },
    ],

    "Breads & Rice": [
        { id: 401, name: "Butter Naan", price: 60, type: "Veg" },
        { id: 402, name: "Tandoori Roti", price: 45, type: "Veg" },
        { id: 403, name: "Veg Biryani", price: 220, type: "Veg" },
        { id: 404, name: "Chicken Biryani", price: 280, type: "Non-Veg" },
    ],

    Desserts: [
        { id: 501, name: "Gulab Jamun", price: 90, type: "Veg" },
        { id: 502, name: "Rasmalai", price: 110, type: "Veg" },
        { id: 503, name: "Ice Cream", price: 80, type: "Veg" },
        { id: 504, name: "Brownie with Ice Cream", price: 150, type: "Veg" },
    ],

    Beverages: [
        { id: 601, name: "Soft Drinks", price: 50, type: "Veg" },
        { id: 602, name: "Fresh Lime Soda", price: 70, type: "Veg" },
        { id: 603, name: "Mocktails", price: 120, type: "Veg" },
        { id: 604, name: "Mineral Water", price: 30, type: "Veg" },
    ],
};

const MenuItems = ({ activeCategory, cart, setCart }) => {
    const items = MENU_DATA[activeCategory] || [];

    const updateQty = (item, delta) => {
        setCart((prev) => {
            const qty = (prev[item.id]?.qty || 0) + delta;
            if (qty <= 0) {
                const copy = { ...prev };
                delete copy[item.id];
                return copy;
            }
            return {
                ...prev,
                [item.id]: { ...item, qty },
            };
        });
    };

    return (
        <div>
            <h2 className="mb-6 text-2xl font-serif font-semibold text-[#6e1b1b]">
                {activeCategory}
            </h2>

            <div className="space-y-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-xl bg-white p-6 shadow-sm"
                    >
                        <div>
                            <h4 className="font-medium text-[#6e1b1b]">{item.name}</h4>
                            <p className="text-sm text-gray-600">₹{item.price}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => updateQty(item, -1)}
                                className="h-8 w-8 rounded-full bg-gray-100"
                            >
                                −
                            </button>

                            <span>{cart[item.id]?.qty || 0}</span>

                            <button
                                onClick={() => updateQty(item, 1)}
                                className="h-8 w-8 rounded-full bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuItems;
