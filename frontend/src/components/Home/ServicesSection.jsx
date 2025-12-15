import React from "react";

// import images from assets
import weddingImg from "../../assets/images/wedding.jpeg";
import birthdayImg from "../../assets/images/birthday.jpg";
import corporateImg from "../../assets/images/corporate.jpg";

const services = [
  {
    title: "Wedding Celebrations",
    image: weddingImg,
    link: "#",
  },
  {
    title: "Birthday Parties",
    image: birthdayImg,
    link: "#",
  },
  {
    title: "Corporate Events",
    image: corporateImg,
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a43c]">
              Our Services
            </p>
            <h2 className="mt-2 max-w-md text-4xl font-serif font-semibold text-gray-900">
              Perfect Venue for <br /> Every Occasion
            </h2>
          </div>

          <button className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100">
            View All Services →
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-serif font-semibold">
                  {service.title}
                </h3>

                <a
                  href={service.link}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-[#d4a43c]"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
