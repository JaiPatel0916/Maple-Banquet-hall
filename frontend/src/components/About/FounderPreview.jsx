import { Link } from "react-router-dom";
import founder1 from "../../assets/images/founder.jpg";
import founder2 from "../../assets/images/founder.jpg"; 

const FounderPreview = () => {
    return (
        <section className="py-24 bg-[#FFFFFF]">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Section Label */}
                <p className="text-sm tracking-widest text-[#D29922] mb-3">
                    OUR FOUNDERS
                </p>

       
                <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16">
                    The Visionaries Behind{" "}
                    <span className="text-[#D29922]">Maple Banquet</span>
                </h2>

           
                <div className="grid gap-14 md:grid-cols-2 justify-center mb-16">

             
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
                            Managing Director
                        </p>

                        <p className="text-gray-600 text-sm max-w-sm">
                            15+ years of hospitality experience, driving Maple Banquet’s
                            vision of excellence.
                        </p>
                    </div>

                  
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
                            Director of Operations
                        </p>

                        <p className="text-gray-600 text-sm max-w-sm">
                            Ensuring flawless execution and extraordinary guest experiences
                            at every event.
                        </p>
                    </div>
                </div>

               
                <Link
                    to="/founder"
                    className="inline-block bg-[#D29922] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#b88619] transition"
                >
                    Learn More About Our Founders
                </Link>

            </div>
        </section>
    );
};

export default FounderPreview;
