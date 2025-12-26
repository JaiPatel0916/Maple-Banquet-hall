import { Link } from "react-router-dom";
import founder1 from "../../assets/images/founder.jpg";
import founder2 from "../../assets/images/founder.jpg";

const FounderPreview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Section Label */}
                <p className="text-sm tracking-widest text-[#D29922] mb-3">
                    OUR FOUNDERS
                </p>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-10">
                    The Visionaries Behind{" "}
                    <span className="text-[#D29922]">Maple Banquet</span>
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600 text-sm md:text-base leading-relaxed">
                    Built on <span className="text-[#D29922] font-semibold">50 years of collective global hospitality expertise</span>,
                    the founders of CHEFIN Hospitalities & Catering Services bring together international training,
                    leadership, and an uncompromising commitment to excellence.
                </p>


                {/* Founders Grid */}
                <div className="grid gap-16 md:grid-cols-2 justify-center">

                    {/* Founder 1 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={founder1}
                            alt="Mr. Rajesh Sharma"
                            className="w-[280px] h-[360px] object-cover rounded-2xl shadow-lg mb-6"
                        />

                        <h3 className="text-2xl font-serif font-semibold">
                            Mr. Rajesh Sharma
                        </h3>

                        <p className="text-[#D29922] mt-1 mb-3">
                            The Global Executive Chef 
                        </p>

                        <p className="text-gray-600 text-sm max-w-sm mb-6">
                            25+ years of hospitality experience, driving Maple Banquet’s
                            vision of excellence.
                        </p>

                        <Link
                            to="/founder/1"
                            className="inline-block bg-[#D29922] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b88619] transition"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Founder 2 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={founder2}
                            alt="Mr. Vikram Sharma"
                            className="w-[280px] h-[360px] object-cover rounded-2xl shadow-lg mb-6"
                        />

                        <h3 className="text-2xl font-serif font-semibold">
                            Mr. Vikram Sharma
                        </h3>

                        <p className="text-[#D29922] mt-1 mb-3">
                            The Beverage & Service Expert
                        </p>

                        <p className="text-gray-600 text-sm max-w-sm mb-6">
                            Ensuring flawless execution and extraordinary guest
                            experiences at every event.
                        </p>

                        <Link
                            to="/founder/2"
                            className="inline-block bg-[#D29922] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b88619] transition"
                        >
                            Learn More
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderPreview;
