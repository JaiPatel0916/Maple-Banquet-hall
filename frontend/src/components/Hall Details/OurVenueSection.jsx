import React from "react";

export default function OurVenueSection() {
  return (
    <section className="bg-[#f6f2ee] py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#d4a43c]">
          Our Venue
        </p>

        <h1 className="text-4xl font-serif font-semibold text-gray-900 md:text-5xl">
          Banquet{" "}
          <span className="italic text-[#d4a43c]">Hall Details</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600">
          Experience elegance and grandeur in our beautifully designed banquet
          hall, perfect for celebrations of all sizes.
        </p>
      </div>
    </section>
  );
}
