import { Link } from "react-router-dom";

const FounderHero = () => {
    return (
        <section className="bg-[#f6f2ee] py-24">
            <div className="max-w-6xl mx-auto px-6 text-center relative">

                <Link
                    to="/about"
                    className="absolute left-12 top-0 bottom-15 text-sm text-gray-600 hover:underline"
                >
                    ← Back to About
                </Link>

                <p className="text-sm tracking-widest text-[#D29922] mb-4">
                    OUR FOUNDER
                </p>

                <h1 className="text-4xl md:text-5xl font-serif font-semibold">
                    The Visionary Behind{" "}
                    <span className="text-[#D29922]">Maple Banquet</span>
                </h1>
            </div>
        </section>
    );
};

export default FounderHero;
