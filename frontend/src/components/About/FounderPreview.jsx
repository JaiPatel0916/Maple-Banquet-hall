import { Link } from "react-router-dom";
import founderImg from "../../assets/images/founder.jpg";

const FounderPreview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                {/* Text */}
                <div>
                    <p className="text-sm tracking-widest text-[#D29922] mb-3">
                        OUR FOUNDER
                    </p>

                    <h2 className="text-4xl font-serif font-semibold mb-3">
                        Mr. Rajesh Sharma
                    </h2>

                    <p className="text-[#D29922] mb-6">
                        Founder & Managing Director
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        With over 15 years of experience in the hospitality industry,
                        Mr. Rajesh Sharma has been the driving force behind Maple Banquet’s
                        success, redefining celebrations with elegance and excellence.
                    </p>

                    <Link
                        to="/founder"
                        className="inline-block bg-[#D29922] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b88619]"
                    >
                        Learn More About Our Founder
                    </Link>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={founderImg}
                        alt="Founder"
                        className="w-full max-w-md rounded-2xl shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default FounderPreview;
