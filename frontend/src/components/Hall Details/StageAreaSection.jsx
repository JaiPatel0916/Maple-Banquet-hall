import React from "react";
import stageImg from "../../assets/images/hall1.jpg";

export default function StageAreaSection() {
  return (
    <section className="bg-[#f6f2ee] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
         
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={stageImg}
              alt="Beautiful Stage Setup"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#d4a43c]">
              Stage Area
            </p>

            <h2 className="text-4xl font-serif font-semibold text-gray-900">
              Beautiful Stage Setup
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-justify">
              Our basic stage setup provides the perfect focal point for your
              event. With elegant drapery, professional lighting, and floral
              arrangements, the stage becomes the centerpiece of your
              celebration.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
              The stage area is designed to accommodate various setups including
              wedding mandaps, engagement décor, corporate presentations, and
              performance spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
