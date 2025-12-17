const addOns = [
    {
        title: "Catering (per plate)",
        price: "₹500 - ₹1500",
    },
    {
        title: "Premium Decoration",
        price: "₹15,000 - ₹50,000",
    },
    {
        title: "DJ & Music",
        price: "₹10,000 - ₹25,000",
    },
    {
        title: "Photography Package",
        price: "₹20,000 - ₹75,000",
    },
    {
        title: "Videography Package",
        price: "₹25,000 - ₹80,000",
    },
    {
        title: "Live Performance",
        price: "On Request",
    },
];

const PackagesAddOns = () => {
    return (
        <section className="bg-[#f3ece5] py-24">
    
            <div className="text-center mb-16 px-4">
                <p className="text-sm tracking-widest text-[#d29922] font-semibold mb-2">
                    ENHANCE YOUR EVENT
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-[#3b1e1e]">
                    Add-On Services
                </h2>
            </div>

        
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {addOns.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl px-8 py-6 shadow-md 
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-[#3b1e1e] text-lg">
                                {item.title}
                            </h3>

                            <span className="text-[#d29922] font-semibold text-sm md:text-base">
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PackagesAddOns;
