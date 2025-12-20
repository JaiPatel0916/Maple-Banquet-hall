
import { useOutdoorCatering } from "../../context/OutdoorCateringContext";

import { Users, User, ChevronDown } from "lucide-react";


const GUEST_OPTIONS = [
    {
        value: "10–15 People",
        label: "10–15 People",
        icon: <User size={28} />,
        desc: "Perfect for intimate gatherings",
    },
    {
        value: "16–50 People",
        label: "16–50 People",
        icon: (
            <div className="flex -space-x-2">
                <User size={26} />
                <User size={26} />
            </div>
        ),
        desc: "Ideal for family functions",
    },
    {
        value: "51–100 People",
        label: "51–100 People",
        icon: (
            <div className="flex -space-x-2">
                <User size={26} />
                <User size={26} />
                <User size={26} />
            </div>
        ),
        desc: "Great for corporate events",
    },
    {
        value: "100+ People",
        label: "100+ People",
        icon:( < div className = "flex -space-x-2" >
                <User size={22} />
                <User size={22} />
                <User size={22} />
                <User size={22} />
        </div >
        ),
        desc: "Perfect for grand celebrations",
    },
];

const GuestStep = () => {
    const { guestRange, setGuestRange, setStep } = useOutdoorCatering();

    return (
        <section className="bg-[#f9f6ef] py-14 px-4 text-center">
            

            {/* ICON */}
            {/* <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D29922]">
                    <Users className="text-[#6e1b1b]" size={30} />
                </div>
            </div> */}

            {/* HEADING */}
            <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-serif text-[#6e1b1b]">
                How many guests are you expecting?
            </h2>
            <p className="mb-5 text-sm text-gray-600">
                Choose the perfect size for your celebration
            </p>
            {/* HINT BOX */}
            <div className="mx-auto mb-5 max-w-md rounded-xl border border-dashed border-[#d4a43c] bg-[#f3ebe1] px-4 py-3 text-sm text-[#6e1b1b]">
                👇 <strong>Tap on any option below</strong>
                <div className="text-xs text-gray-600">
                    Select the number of guests for your event
                </div>
            </div>

            {/* BLINKING ARROW (ONLY WHEN NOT SELECTED) */}
            {!guestRange && (
                <div className="mb-4 flex justify-center animate-bounce">
                    <ChevronDown size={28} className="text-[#D29922]" />
                </div>
            )}

            {/* OPTIONS GRID */}
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {GUEST_OPTIONS.map((opt) => {
                    const selected = guestRange === opt.value;

                    return (
                        <button
                            key={opt.value}
                            onClick={() => setGuestRange(opt.value)}
                            className={`relative rounded-2xl border px-4 py-8 transition-all duration-300
                ${selected
                                    ? "bg-[#6e1b1b] border-[#D29922] scale-[1.05]"
                                    : "bg-white border-gray-200 hover:scale-[1.05]"
                                }`}
                        >
                            {/* ICON CIRCLE */}
                            <div
                                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full
                  ${selected
                                        ? "bg-[#D29922] text-[#6e1b1b]"
                                        : "bg-[#f5ecd6] text-[#6e1b1b]"
                                    }`}
                            >
                                {opt.icon}
                            </div>

                            {/* LABEL */}
                            <h4
                                className={`mb-2 text-sm sm:text-base font-serif font-semibold ${selected ? "text-white" : "text-[#6e1b1b]"
                                    }`}
                            >
                                {opt.label}
                            </h4>

                            {/* DESCRIPTION */}
                            <p
                                className={`text-xs sm:text-sm ${selected ? "text-gray-200" : "text-gray-500"
                                    }`}
                            >
                                {opt.desc}
                            </p>

                            {/* SELECTED BADGE */}
                            {selected && (
                                <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[#D29922]">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D29922] text-xs text-[#6e1b1b]">
                                        ✓
                                    </span>
                                    Selected
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* CONFIRMATION */}
            {guestRange && (
                <p className="mt-8 text-sm text-green-600">
                    ✓ Great! You've selected <strong>{guestRange}</strong>
                </p>
            )}

            {/* CTA */}
            <button
                disabled={!guestRange}
                onClick={() => setStep(2)}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D29922] px-10 py-3 font-medium text-black transition hover:bg-[#b88619] disabled:opacity-40"
            >
                Continue to Menu Selection →
            </button>
        </section>
    );
};

export default GuestStep;
