import React from "react";
import grandHallImg from "../../assets/images/hero-banquet.jpg";

export default function GrandHallSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#d4a43c]">
              Grand Hallroom
            </p>

            <h2 className="text-4xl font-serif font-semibold text-gray-900">
              The Grand Hall
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our magnificent grand hall is designed to accommodate up to 200
              guests comfortably. Featuring ornate ceiling designs with elegant
              chandeliers, the space creates a breathtaking ambience for any
              occasion.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The hall features beautiful golden accents, luxurious drapes, and
              premium flooring that adds to the sophisticated atmosphere.
              Whether it's a wedding reception, engagement ceremony, or
              corporate gala, our grand hall sets the perfect stage.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-[#f6f2ee] p-6">
                <h3 className="text-3xl font-bold text-[#d4a43c]">200+</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Guest Capacity
                </p>
              </div>

              <div className="rounded-xl bg-[#f6f2ee] p-6">
                <h3 className="text-3xl font-bold text-[#d4a43c]">5000</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Sq. Ft. Area
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={grandHallImg}
              alt="The Grand Hall"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
