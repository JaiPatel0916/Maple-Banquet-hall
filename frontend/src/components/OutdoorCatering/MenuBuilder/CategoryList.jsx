const categories = [
    "Starters",
    "Soups",
    "Main Course",
    "Breads & Rice",
    "Desserts",
    "Beverages",
];

const CategoryList = ({ activeCategory, setActiveCategory }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-semibold text-[#6e1b1b]">Categories</h3>

            <div className="space-y-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full rounded-lg px-4 py-3 text-left transition
              ${activeCategory === cat
                                ? "bg-[#6e1b1b] text-white"
                                : "bg-white hover:bg-[#f0e6da]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
