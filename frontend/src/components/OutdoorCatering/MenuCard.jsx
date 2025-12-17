// FILE: src/components/OutdoorCatering/MenuCard.jsx

const MenuCard = ({ item, selected, onToggle }) => {
    return (
        <div
            className={`rounded-lg overflow-hidden border transition-all duration-200
        ${selected
                    ? "border-[#d29922] shadow-sm"
                    : "border-gray-200 hover:shadow-sm"
                }`}
        >
            {/* Image */}
            <img
                src={item.image}
                alt={item.name}
                className="h-32 sm:h-36 w-full object-cover"
            />

            {/* Content */}
            <div className="p-3 text-center">
                <h4 className="text-sm font-medium leading-snug">
                    {item.name}
                </h4>

                <span className="block text-[11px] mt-0.5 text-green-600">
                    {item.type}
                </span>

                <button
                    onClick={onToggle}
                    className={`mt-3 w-full rounded-md border py-1.5 text-sm transition
            ${selected
                            ? "bg-[#d29922] border-[#d29922] text-black"
                            : "hover:bg-[#f6f2ee]"
                        }`}
                >
                    {selected ? "Selected ✓" : "Add"}
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
