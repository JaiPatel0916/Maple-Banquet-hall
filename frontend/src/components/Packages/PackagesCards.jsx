// FILE: src/components/Packages/PackagesCards.jsx

import { FiCheck } from "react-icons/fi";
import { FaCrown, FaStar } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const packages = [
    {
        name: "Essential",
        icon: <Sparkles className="text-[#d29922]" size={24} />,
        desc: "Perfect for intimate gatherings up to 50 guests",
        price: "₹35,000",
        hours: "4 hours",
        features: [
            "Venue for 4 hours",
            "Basic décor setup",
            "Standard seating arrangement",
            "In-house sound system",
            "Basic lighting",
            "Parking facility",
        ],
        popular: false,
    },
    {
        name: "Premium",
        icon: <FaStar className="text-[#d29922]" size={22} />,
        desc: "Ideal for medium-sized celebrations up to 100 guests",
        price: "₹65,000",
        hours: "6 hours",
        features: [
            "Venue for 6 hours",
            "Enhanced décor & flowers",
            "Premium seating arrangement",
            "Professional sound system",
            "Ambient lighting setup",
            "Welcome drinks",
            "Valet parking",
            "Dedicated event coordinator",
        ],
        popular: true,
    },
    {
        name: "Royal",
        icon: <FaCrown className="text-[#d29922]" size={22} />,
        desc: "Grand celebrations for up to 200 guests",
        price: "₹1,25,000",
        hours: "8 hours",
        features: [
            "Venue for 8 hours",
            "Luxury décor & premium flowers",
            "VIP seating arrangement",
            "High-end sound & DJ setup",
            "Designer lighting package",
            "Welcome drinks & starters",
            "Full valet service",
            "Senior event coordinator",
            "Photo booth setup",
            "Stage decoration included",
        ],
        popular: false,
    },
];

const PackagesCards = () => {
    return (
        <section className="bg-[#FFFFFF] pb-24 pt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300
              ${pkg.popular
                                ? "bg-[#6e1b1b] text-white scale-[1.05] shadow-2xl"
                                : "bg-white shadow-lg hover:-translate-y-2"
                            }`}
                    >
                        {/* Most Popular Badge */}
                        {pkg.popular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d29922] text-black px-4 py-1 rounded-full text-sm font-semibold">
                                Most Popular
                            </span>
                        )}

                        {/* Icon */}
                        <div className="w-14 h-14 rounded-full bg-[#f9eac7] flex items-center justify-center mb-6">
                            {pkg.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-2">
                            {pkg.name}
                        </h3>

                        <p className={`mb-6 ${pkg.popular ? "text-gray-200" : "text-gray-600"}`}>
                            {pkg.desc}
                        </p>

                        {/* Price */}
                        <div className="mb-6">
                            <span className={`text-4xl font-bold ${pkg.popular ? "text-[#d29922]" : "text-black"}`}>
                                {pkg.price}
                            </span>
                            <span className={`ml-2 text-sm ${pkg.popular ? "text-gray-300" : "text-gray-500"}`}>
                                starting
                            </span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FiCheck className="text-[#d29922] mt-1" />
                                    <span className={`${pkg.popular ? "text-gray-100" : "text-gray-700"}`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button
                            className={`w-full py-3 rounded-lg font-semibold transition
                ${pkg.popular
                                    ? "bg-[#d29922] text-black hover:bg-[#b88619]"
                                    : "border border-[#d29922] text-black hover:bg-[#d29922]"
                                }`}
                        >
                            Book Now
                        </button>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default PackagesCards;
