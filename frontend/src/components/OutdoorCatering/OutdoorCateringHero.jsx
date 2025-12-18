const OutdoorCateringHero = () => {
    return (
        <section className="relative h-[50vh]  min-h-[360px] w-full overflow-hidden">

            <div className="absolute inset-0 bg-[#FFFFF] " />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                <div className="max-w-3xl">
                    <p className="text-sm tracking-widest text-[#d29922] font-semibold mb-3">
                        Catering
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#3b1e1e] mb-6">
                        OutDoor{" "}
                        <span className="text-[#d29922] italic">
                            Catering
                        </span>
                    </h2>

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
