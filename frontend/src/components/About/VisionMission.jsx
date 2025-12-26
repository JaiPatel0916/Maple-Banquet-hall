import { Eye, Target } from "lucide-react";

const VisionMission = () => {
    return (
        <section className="bg-[#f9f6ef] py-28 px-4">
            <div className="max-w-6xl mx-auto text-center">

             
                <p className="text-sm tracking-widest text-[#D29922] mb-3">
                    OUR PURPOSE
                </p>

            
                <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16">
                    Vision & Mission
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                 
                    <div className="bg-white rounded-2xl p-10 shadow-md text-left">
                        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#f5ecd6] mb-6">
                            <Eye className="text-[#D29922]" />
                        </div>

                        <h3 className="text-2xl font-serif font-semibold mb-4">
                            Our Vision
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-justify">
                            CHEF IN Hospitalities aims to elevate events in Nagpur 
                            by delivering global-standard food and professional 
                            service with a personal touch. Backed by decades of 
                            hospitality experience, we focus on chef-crafted cuisine,
                            customized menus, and exceptional service, while maintaining
                            the highest standards of quality, hygiene, and guest satisfaction 
                            to create memorable event experiences.
                        </p>
                    </div>

        
                    <div className="bg-white rounded-2xl p-10 shadow-md text-left">
                        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#f5ecd6] mb-6">
                            <Target className="text-[#D29922]" />
                        </div>

                        <h3 className="text-2xl font-serif font-semibold mb-4">
                            Our Mission
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-justify-left">
                            To deliver exceptional hospitality services with unwavering
                            commitment to quality, personalized attention, and innovative
                            solutions ensuring every client’s event is executed flawlessly
                            while maintaining the warmth and elegance that defines Maple
                            Banquet.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
