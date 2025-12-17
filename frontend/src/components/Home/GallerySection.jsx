import React from "react";

// Import images from assets
import imgMain from "../../assets/images/hero-banquet.jpg";
import imgTop1 from "../../assets/images/hall-1.jpg";
import imgTop2 from "../../assets/images/hall-2.jpg";
import imgBottom from "../../assets/images/catering.jpg";

export default function GallerySection() {
  return (
    <section className="bg-[#f6f2ee] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#d4a43c]">
            Gallery
          </p>
          <h2 className="mt-2 text-4xl font-serif font-semibold text-gray-900">
            Experience the Elegance
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600">
            Take a glimpse into our stunning venue and see why Maple Banquet is
            the perfect choice.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left large image */}
          <div className="lg:row-span-2 overflow-hidden rounded-2xl">
            <img
              src={imgMain}
              alt="Banquet Hall"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Top right images */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={imgTop1}
              alt="Luxury Interior"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={imgTop2}
              alt="Decor Setup"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Bottom right image */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl">
            <img
              src={imgBottom}
              alt="Catering Setup"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-md bg-[#d4a43c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c29635]">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
