import React from "react";
import heroImage from "../../assets/images/hero-banquet.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-72px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* content */}
      <div className="relative z-10 flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 text-center text-white">

        {/* Heading */}
        <h1 className="text-4xl font-light md:text-6xl">
          Create{" "}
          <span className="font-serif italic text-[#d4a43c]">
            Unforgettable
          </span>
          <br />
          <span className="font-serif font-semibold">Moments</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-3xl text-base text-gray-200 md:text-lg">
          Experience elegance and luxury at Maple Banquet. The perfect venue for
          weddings, celebrations, and corporate events with exceptional service.
        </p>


        <div className="mt-8 flex gap-4 xs-center">
          <button className="rounded-md bg-[#d4a43c] px-6 py-3 font-semibold text-black transition hover:bg-[#c29635] xs-full">
            Book Your Event
          </button>

          <button className="rounded-md border-2 border-[#d4a43c] px-6 py-3 font-semibold text-[#d4a43c] transition hover:bg-[#d4a43c] hover:text-black xs-full">
            Explore Venue
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 text-[#d4a43c] sm:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="mt-1 text-sm text-gray-300">Guest Capacity</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="mt-1 text-sm text-gray-300">Events Hosted</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="mt-1 text-sm text-gray-300">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
