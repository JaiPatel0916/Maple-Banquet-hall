// FILE: src/components/Packages/PackagesCTA.jsx

const PackagesCTA = () => {
    return (
        <section className="bg-[#6e1b1b] py-28">
            <div className="max-w-3xl mx-auto text-center px-4">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Need a Custom Package?
                </h2>

                {/* Description */}
                <p className="text-gray-200 text-lg leading-relaxed mb-10">
                    We understand every event is unique. Contact us to create a customized
                    package that perfectly fits your needs and budget.
                </p>

                {/* CTA Button */}
                <button className="bg-[#d29922] hover:bg-[#b88619] transition text-black font-semibold px-8 py-4 rounded-lg shadow-lg">
                    Get Custom Quote
                </button>

            </div>
        </section>
    );
};

export default PackagesCTA;
