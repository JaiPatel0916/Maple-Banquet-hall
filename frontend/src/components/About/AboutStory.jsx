
import { FiCheckCircle } from "react-icons/fi";
import AboutImage from "../../assets/images/hall.jpg";


const AboutStory = () => {
    return (
        <section className="bg-[#f6f2ee] pt-24 pb-20">

            
            <div className="text-center max-w-3xl mx-auto px-4">
                <p className="text-sm tracking-widest text-[#b28a3b] font-semibold mb-2">
                    ABOUT US
                </p> 

                <h2 className="text-4xl md:text-6xl font-bold text-black mb-3 leading-tight">
                    Where Dreams Become 
                    <span className="text-[#c79627] italic"> Reality</span>
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                    Maple Banquet is a unit of Chefin Hospitalities, dedicated to creating extraordinary
                    events and unforgettable memories in our elegant venue.
                </p>
            </div>

         
            <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-8">

               
                <div className="relative">
                    <img
                        src={AboutImage}
                        alt="Banquet Hall"
                        className="rounded-2xl shadow-lg w-full h-auto object-cover"
                    />


                    <div className="absolute -bottom-6 left-6 bg-[#d29922] shadow-lg rounded-lg px-6 py-4">
                        <p className="text-black text-3xl font-bold">500+</p>
                        <p className="text-black text-sm font-semibold -mt-1">Events Hosted</p>
                    </div>
                </div>

                
                <div>
                    <p className="text-sm tracking-widest text-[#b28a3b] font-semibold mb-2">
                        OUR STORY
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold text-[#3b1e1e] mb-5">
                        A Legacy of Celebration
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Maple Banquet was born from a simple vision: to create a space where every celebration
                        becomes a cherished memory. Located in the heart of Nagpur at Hudkeshwar Road, we have
                        established ourselves as one of the premier banquet venues in the region.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Our beautifully designed interiors, featuring elegant chandeliers and sophisticated décor,
                        provide the perfect backdrop for weddings, engagements, birthday parties, corporate events,
                        and all your special occasions.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        <div className="flex items-start gap-3">
                            <FiCheckCircle className="text-[#d29922] text-xl mt-1" />
                            <p>Over 500+ successful events hosted</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <FiCheckCircle className="text-[#d29922] text-xl mt-1" />
                            <p>Award-winning in-house catering</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <FiCheckCircle className="text-[#d29922] text-xl mt-1" />
                            <p>Capacity for up to 200 guests</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <FiCheckCircle className="text-[#d29922] text-xl mt-1" />
                            <p>Professional event coordination</p>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default AboutStory;
