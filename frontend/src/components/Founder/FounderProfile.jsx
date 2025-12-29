import founder1 from "../../assets/images/founder.jpg";
import founder2 from "../../assets/images/founder.jpg";

const FOUNDERS = {
    1: {
        name: "Mr. Rajesh Sharma",
        role: "The Global Executive Chef (Culinary Visionary)",
        image: founder1,
        quote:
            "Every celebration is a story waiting to be told. At Maple Banquet, we craft memories that last a lifetime.",
        bio1:
            "With over 25 years of industry experience, he has built a career defined by culinary precision, strong leadership, and operational excellence.",
        bio2:
            "With a 15-year international culinary legacy, he spent over a decade overseas rising to the prestigious role of Executive Chef, leading world class kitchens and mastering a wide range of global cuisines.",
    },
    2: {
        name: "Mr. Vikram Sharma",
        role: "The Beverage & Service Expert (Operations Specialist)",
        image: founder2,
        quote:
            "Excellence is not a destination but a continuous journey. We strive to exceed expectations every day.",
        bio1:
            "With over 25 years of hospitality mastery, he brings deep expertise in front-of-house operations and delivering refined, high-end guest experiences.",
        bio2:
            "As a trained specialist with overseas experience, he brings in-depth expertise in the global spirits and wine industry, ensuring a refined beverage program and impeccable food service standards.",
    },
};

const FounderProfile = ({ founderId }) => {
    const founder = FOUNDERS[founderId];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

               
                <div className="relative">
                    <img
                        src={founder.image}
                        alt={founder.name}
                        className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute bottom-6 -right-6 bg-[#D29922] text-black px-2 py-2 rounded-xl shadow-lg">
                        <p className="text-2xl font-bold">25+</p>
                        <p className="text-sm">Years of Excellence</p>
                    </div>
                </div>

         
                <div>
                    <p className="text-sm tracking-widest text-[#D29922] mb-2">
                        MEET OUR FOUNDER
                    </p>
                    

                    <h2 className="text-4xl font-serif font-semibold mb-3">
                        {founder.name}
                    </h2>

                    <p className="text-[#D29922] mb-6">
                        {founder.role}
                    </p>

                    <div className="bg-[#f6f2ee] p-6 rounded-xl mb-6">
                        <p className="italic text-gray-700">
                            “{founder.quote}”
                        </p>
                    </div>

                    <p className="text-gray-600 mb-4 text-justify">{founder.bio1}</p>
                    <p className="text-gray-600 text-justify">{founder.bio2}</p>
                </div>

            </div>
        </section>
    );
};

export default FounderProfile;
