import React from "react";
import loungeImg from "../../assets/images/hall-2.jpg";

export default function LoungeSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#d4a43c]">
              Lounge
            </p>

            <h2 className="text-4xl font-serif font-semibold text-gray-900">
              Elegant Lounge Area
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our sophisticated lounge area features plush white leather sofas
              and elegant furnishings, creating a refined space for your guests
              to relax and socialize.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Perfect for pre-event gatherings, cocktail hours, or simply
              providing a comfortable retreat from the main celebration area.
            </p>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={loungeImg}
              alt="Elegant Lounge Area"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
