import { Users } from "lucide-react";
import { useOutdoorCatering } from "../../context/OutdoorCateringContext";

const GUEST_OPTIONS = [
    {
        value: "10–15 People",
        label: "10–15 People",
        number: "10",
        desc: "Perfect for intimate gatherings",
    },
    {
        value: "16–50 People",
        label: "16–50 People",
        number: "16",
        desc: "Ideal for family functions",
    },
    {
        value: "51–100 People",
        label: "51–100 People",
        number: "51",
        desc: "Great for corporate events",
    },
    {
        value: "100+ People",
        label: "100+ People",
        number: "100+",
        desc: "Perfect for grand celebrations",
    },
];

const GuestStep = () => {
    const { guestRange, setGuestRange, setStep } = useOutdoorCatering();

    return (
        <section className="py-28 px-4 bg-[#f9f6ef] text-center">
         
            <div className="flex justify-center mb-6">
                <div className="h-14 w-14 rounded-full bg-[#D29922] flex items-center justify-center">
                    <Users className="text-[#6e1b1b]" />
                </div>
            </div>

           
            <h2 className="text-3xl md:text-4xl font-serif text-[#6e1b1b] mb-2">
                How many guests are you expecting?
            </h2>
            <p className="text-sm text-gray-600 mb-14">
                Choose the perfect size for your celebration
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {GUEST_OPTIONS.map((opt) => {
                    const selected = guestRange === opt.value;

                    return (
                        <button
                            key={opt.value}
                            onClick={() => setGuestRange(opt.value)}
                            className={`relative rounded-2xl border px-6 py-10 text-center transition-all duration-300
                ${selected
                                    ? "bg-[#6e1b1b] text-white border-[#D29922] scale-105"
                                    : "bg-white border-gray-200 hover:scale-105"
                                }`}
                        >
                          
                            <div
                                className={`mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full text-xl font-bold
                  ${selected
                                        ? "bg-[#D29922] text-[#6e1b1b]"
                                        : "bg-[#f5ecd6] text-[#6e1b1b]"
                                    }`}
                            >
                                {opt.number}
                            </div>

                            <h4 className="text-lg font-serif font-semibold mb-2">
                                {opt.label}
                            </h4>

                            <p
                                className={`text-sm ${selected ? "text-gray-200" : "text-gray-500"
                                    }`}
                            >
                                {opt.desc}
                            </p>

                            {selected && (
                                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#D29922]">
                                    <span className="h-5 w-5 flex items-center justify-center rounded-full bg-[#D29922] text-[#6e1b1b] text-xs">
                                        ✓
                                    </span>
                                    Selected
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            <button
                disabled={!guestRange}
                onClick={() => setStep(2)}
                className="mt-16 inline-flex items-center gap-2 rounded-lg bg-[#D29922] px-8 py-3 font-medium text-black transition hover:bg-[#b88619] disabled:opacity-40"
            >
                Continue to Menu →
            </button>
        </section>
    );
};

export default GuestStep;
