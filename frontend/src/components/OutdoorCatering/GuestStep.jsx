import { useOutdoorCatering } from "../../context/OutdoorCateringContext";

const ranges = [
    "10–15 People",
    "16–50 People",
    "51–100 People",
    "100+ People",
];

const GuestStep = () => {
    const { guestRange, setGuestRange, setStep } =
        useOutdoorCatering();

    return (
        <section className="py-24 text-center">
            <h2 className="text-3xl font-serif text-[#6e1b1b] mb-4">
                How many guests are you expecting?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
                {ranges.map((range) => (
                    <button
                        key={range}
                        onClick={() => setGuestRange(range)}
                        className={`rounded-xl border p-6 text-left transition
              ${guestRange === range
                                ? "border-[#d29922] bg-[#f9efd8]"
                                : "border-gray-200"
                            }`}
                    >
                        <h4 className="font-medium">{range}</h4>
                    </button>
                ))}
            </div>

            <button
                disabled={!guestRange}
                onClick={() => setStep(2)}
                className="mt-10 rounded-lg bg-[#d29922] px-8 py-3 font-medium disabled:opacity-40"
            >
                Continue to Menu →
            </button>
        </section>
    );
};

export default GuestStep;
