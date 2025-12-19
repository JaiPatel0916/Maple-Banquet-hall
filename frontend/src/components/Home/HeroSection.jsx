import React from "react";
import heroImage from "../../assets/images/hero-banquet.jpg";
import { Link } from "react-router-dom";
import Counter from "../Counter";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-70px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 pt-16 md:pt-0 text-center text-white">

        <h1 className="text-4xl font-light md:text-6xl">
          Create{" "}
          <span className="font-serif italic text-[#d4a43c]">
            Unforgettable
          </span>
          <br />
          <span className="font-serif font-semibold">Moments</span>
        </h1>

        <p className="mt-6 max-w-3xl text-base text-gray-200 md:text-lg">
          Experience elegance and luxury at Maple Banquet. The perfect venue for
          weddings, celebrations, and corporate events with exceptional service.
        </p>

        <div className="mt-8 flex gap-4 flex-col sm:flex-row">
          <Link
            to="/contact"
            className="inline-block rounded-md bg-[#d4a43c] px-6 py-3 font-semibold text-black transition hover:bg-[#c29635] text-center"
          >
            Book Your Event
          </Link>

          <Link
            to="/hall"
            className="inline-block rounded-md border-2 border-[#d4a43c] px-6 py-3 font-semibold text-[#d4a43c] transition hover:bg-[#d4a43c] hover:text-black text-center"
          >
            Explore Venue
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 text-[#d4a43c] sm:grid-cols-3 text-center">
          <div>
            <Counter end={200} suffix="+" />
            <p className="mt-1 text-sm text-gray-300">Guest Capacity</p>
          </div>

          <div>
            <Counter end={500} suffix="+" />
            <p className="mt-1 text-sm text-gray-300">Events Hosted</p>
          </div>

          <div>
            <Counter end={100} suffix="%" />
            <p className="mt-1 text-sm text-gray-300">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
