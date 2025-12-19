import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="bg-[#f6f2ee] py-24 md:py-22">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Small label */}
        <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4a43c] mb-5">
          About Us
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
          Where Dreams Become{" "}
          <span className="block italic font-serif text-[#d4a43c]">
            Reality
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-[15px] md:text-[16px] text-[#3f3f3f] leading-relaxed">
          Maple Banquet is a unit of Chefin Hospitalities, dedicated to creating
          extraordinary events and unforgettable memories in our elegant venue.
        </p>

      </div>
    </section>
  );
};

export default AboutHeroSection;
