import founderImg from "../../assets/images/founder.jpg";

const FounderProfile = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

              
                <div className="relative">
                    <img
                        src={founderImg}
                        alt="Mr. Rajesh Sharma"
                        className="rounded-2xl shadow-xl"
                    />

                    <div className="absolute -bottom-6 -right-6 bg-[#D29922] text-black px-6 py-4 rounded-xl shadow-lg">
                        <p className="text-2xl font-bold">15+</p>
                        <p className="text-sm">Years of Excellence</p>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <p className="text-sm tracking-widest text-[#D29922] mb-2">
                        MEET OUR FOUNDER
                    </p>

                    <h2 className="text-4xl font-serif font-semibold mb-3">
                        Mr. Rajesh Sharma
                    </h2>

                    <p className="text-[#D29922] mb-6">
                        Founder & Managing Director, Chefin Hospitalities
                    </p>

                    {/* Quote */}
                    <div className="bg-[#f6f2ee] p-6 rounded-xl mb-6 relative">
                        {/* <span className="text-4xl text-[#D29922] absolute top-2 left-4">
                            “
                        </span> */}
                        <p className="italic text-gray-700 pl-6">
                            "Every celebration is a story waiting to be told. At Maple Banquet,
                            we don’t just host events — we craft memories that last a lifetime."
                        </p>
                        
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        With over 15 years of experience in the hospitality industry,
                        Mr. Rajesh Sharma has been the driving force behind Maple Banquet’s
                        success. His vision blends traditional elegance with modern
                        amenities, making Maple Banquet one of Nagpur’s most sought-after
                        destinations.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Under his leadership, Chefin Hospitalities has grown into a
                        comprehensive hospitality brand known for exceptional service,
                        attention to detail, and unforgettable guest experiences.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FounderProfile;
