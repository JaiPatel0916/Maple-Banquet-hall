const PackagesHero = () => {
    return (
        <section className="bg-[#f3ece5] pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center px-4">

                <p className="text-sm tracking-widest text-[#d29922] font-semibold mb-3">
                    PRICING
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-[#3b1e1e] mb-6">
                    Our{" "}
                    <span className="text-[#d29922] italic">
                        Packages
                    </span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Choose the perfect package for your celebration. All packages can be
                    customized to meet your specific requirements.
                </p>

                <div className="inline-flex items-center gap-2 bg-[#f6e6c8] text-[#d29922] px-6 py-3 rounded-full text-sm font-semibold">
                 Inaugural Offer: 10% Off on All Packages!
                </div>

            </div>
        </section>
    );
};

export default PackagesHero;
