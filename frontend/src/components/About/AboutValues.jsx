// FILE: src/components/About/AboutValues.jsx

import { FiHeart, FiAward, FiUsers, FiTarget } from "react-icons/fi";

const values = [
    {
        icon: <FiHeart size={28} className="text-[#d29922]" />,
        title: "Passion",
        desc: "We pour our hearts into every event, ensuring every detail is perfect.",
    },
    {
        icon: <FiAward size={28} className="text-[#d29922]" />,
        title: "Excellence",
        desc: "We strive for excellence in service, ambiance, and guest experience.",
    },
    {
        icon: <FiUsers size={28} className="text-[#d29922]" />,
        title: "Family",
        desc: "We treat every client as family, creating warm, welcoming experiences.",
    },
    {
        icon: <FiTarget size={28} className="text-[#d29922]" />,
        title: "Dedication",
        desc: "Our team is dedicated to making your vision come to life.",
    },
];

const AboutValues = () => {
    return (
        <section className="bg-[#f3ece5] py-4">
            {/* Heading */}
            <div className="text-center mb-16 px-4">
                <p className="text-sm tracking-widest text-[#b28a3b] font-semibold mb-2">
                    OUR VALUES
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-[#3b1e1e]">
                    What Drives Us
                </h2>
            </div>

            {/* Values Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10">
                {values.map((value, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
               py-10 px-6 text-center transition-all duration-300 
               hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02]"
                    >

                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-[70px] h-[70px] rounded-full bg-[#f9eac7] flex items-center justify-center">
                                {value.icon}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#3b1e1e] mb-3">
                            {value.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {value.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutValues;
