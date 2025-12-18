import founder1 from "../../assets/images/founder.jpg";
import founder2 from "../../assets/images/founder.jpg";

const FOUNDERS = {
    1: {
        name: "Mr. Rajesh Sharma",
        role: "Managing Director, Chefin Hospitalities",
        image: founder1,
        quote:
            "Every celebration is a story waiting to be told. At Maple Banquet, we craft memories that last a lifetime.",
        bio1:
            "With over 15 years of experience, Mr. Rajesh Sharma has been the driving force behind Maple Banquet.",
        bio2:
            "His vision blends traditional elegance with modern hospitality excellence.",
    },
    2: {
        name: "Mr. Vikram Sharma",
        role: "Director of Operations, Chefin Hospitalities",
        image: founder2,
        quote:
            "Excellence is not a destination but a continuous journey. We strive to exceed expectations every day.",
        bio1:
            "Mr. Vikram Sharma leads operations with precision and strategic insight.",
        bio2:
            "His leadership ensures flawless execution and unforgettable guest experiences.",
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
                        {founder.name}
                    </h2>

                    {/* <p className="text-[#D29922] mb-6">
                        {founder.role}
                    </p> */}

                    <div className="bg-[#f6f2ee] p-6 rounded-xl mb-6">
                        <p className="italic text-gray-700">
                            “{founder.quote}”
                        </p>
                    </div>

                    <p className="text-gray-600 mb-4">{founder.bio1}</p>
                    <p className="text-gray-600">{founder.bio2}</p>
                </div>

            </div>
        </section>
    );
};

export default FounderProfile;
