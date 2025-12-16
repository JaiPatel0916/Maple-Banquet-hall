// FILE: src/components/OutdoorCatering/OutdoorCateringHero.jsx

const OutdoorCateringHero = () => {
    return (
        <section className="relative h-[50vh]  min-h-[360px] w-full overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[#FFFFF] " />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                <div className="max-w-3xl">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-black mb-6">
                        Outdoor Catering
                    </h1>

                    <p className="text-base md:text-lg text-black/90 leading-relaxed">
                        Bring the taste of Maple Banquet to your doorstep. Select from our
                        exquisite menu for your special occasions.
                    </p>

                </div>
            </div>

        </section>
    );
};

export default OutdoorCateringHero;
