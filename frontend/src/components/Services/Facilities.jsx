import React from "react";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "In-House Catering",
    desc: "Delicious multi-cuisine menu options",
    icon: "🍽️",
  },
  {
    title: "Sound System",
    desc: "Professional audio equipment",
    icon: "🎵",
  },
  {
    title: "Décor Services",
    desc: "Customizable event decorations",
    icon: "🌸",
  },
  {
    title: "Photo Zones",
    desc: "Beautiful backdrops for memories",
    icon: "📸",
  },
  {
    title: "Parking",
    desc: "Ample parking for guests",
    icon: "🚗",
  },
  {
    title: "Lighting",
    desc: "Ambient and accent lighting",
    icon: "💡",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-[#f6f2ee] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d4a43c]">
            Facilities
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Everything You Need
          </h2>
        </div>

        {/* Facilities Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 h-60px">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white px-6 py-10 text-center shadow-sm hover:shadow-md transition"
            >
              {/* Icon Circle */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#faf3e0] text-2xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-base font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;
