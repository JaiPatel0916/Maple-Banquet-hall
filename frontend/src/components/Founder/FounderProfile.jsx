import founder1 from "../../assets/images/founder.jpg";
import founder2 from "../../assets/images/founder.jpg";

const FOUNDERS = [
    {
        id: 1,
        name: "Mr. Rajesh Sharma",
        role: "Managing Director, Chefin Hospitalities",
        image: founder1,
        quote:
            "Every celebration is a story waiting to be told. At Maple Banquet, we craft memories that last a lifetime.",
        bio1:
            "With over 15 years of experience in the hospitality industry, Mr. Rajesh Sharma has been the driving force behind Maple Banquet’s success.",
        bio2:
            "His vision blends traditional elegance with modern amenities, making Maple Banquet one of Nagpur’s most sought-after event destinations.",
    },
    {
        id: 2,
        name: "Mr. Vikram Sharma",
        role: "Director of Operations, Chefin Hospitalities",
        image: founder2,
        quote:
            "Excellence is not a destination but a continuous journey. We strive to exceed expectations every single day.",
        bio1:
            "Mr. Vikram Sharma brings operational excellence and strategic leadership to Chefin Hospitalities.",
        bio2:
            "His meticulous attention to detail ensures flawless execution and extraordinary guest experiences.",
    },
];

const FounderProfile = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {FOUNDERS.map((founder) => (
                        <div key={founder.id}>

                            <div className="relative mb-10">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="rounded-2xl shadow-xl w-full object-cover"
                                />

                            
                                <div className="absolute -bottom-6 right-1 bg-[#D29922] text-black px-1 py-2 rounded-xl shadow-lg">
                                    <p className="text-2xl font-bold">15+</p>
                                    <p className="text-sm">Years of Excellence</p>
                                </div>
                            </div>

                            <p className="text-sm tracking-widest text-[#D29922] mb-2">
                                FOUNDER
                            </p>

                            <h2 className="text-3xl font-serif font-semibold mb-2">
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

                            <p className="text-gray-600 leading-relaxed mb-4">
                                {founder.bio1}
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                {founder.bio2}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default FounderProfile;
