const SelectionSummary = ({ cart }) => {
    const items = Object.values(cart);
    const total = items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div className="rounded-xl bg-white p-6 shadow-lg sticky top-28 h-fit flex flex-col">
            {/* Title */}
            <h3 className="mb-4 text-lg font-semibold text-[#6e1b1b]">
                Your Selection
            </h3>

            {/* Scrollable Items */}
            <div className="space-y-3 text-sm overflow-y-auto max-h-[320px] pr-2">
                {items.length === 0 && (
                    <p className="text-gray-500 text-center py-6">
                        No items selected yet
                    </p>
                )}

                {items.map((item) => (
                    <div key={item.id} className="flex justify-between gap-2">
                        <span className="truncate">
                            {item.name} × {item.qty}
                        </span>
                        <span className="whitespace-nowrap">
                            ₹{item.price * item.qty}
                        </span>
                    </div>
                ))}
            </div>

            <hr className="my-4" />

            {/* Total */}
            <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
            </div>

            {/* CTA */}
            <button className="mt-6 w-full rounded-lg bg-[#d29922] py-3 font-medium text-black">
                Enquire on WhatsApp
            </button>
        </div>
    );
};

export default SelectionSummary;
