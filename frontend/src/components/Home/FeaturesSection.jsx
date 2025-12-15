import React from "react";
import {
  Sparkles,
  Users,
  UtensilsCrossed,
  UserCheck,
  Music,
  Car,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Elegant Ambience",
    description:
      "Beautifully designed interiors with ornate chandeliers and elegant décor for the perfect backdrop.",
  },
  {
    icon: Users,
    title: "Spacious Venue",
    description:
      "Accommodate up to 200 guests comfortably in our grand banquet hall.",
  },
  {
    icon: UtensilsCrossed,
    title: "In-House Catering",
    description:
      "Enjoy a variety of delicious menu options tailored to your event by our expert chefs.",
  },
  {
    icon: UserCheck,
    title: "Professional Staff",
    description:
      "Our experienced team is dedicated to making your event truly unforgettable.",
  },
  {
    icon: Music,
    title: "Music System",
    description:
      "State-of-the-art in-house music system for entertainment and announcements.",
  },
  {
    icon: Car,
    title: "Ample Parking",
    description:
      "Convenient and spacious parking facilities available for all your guests.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#f6f2ee] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a43c]">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-4xl font-serif font-semibold text-gray-900">
            Exceptional Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Every detail is crafted to perfection to ensure your event is nothing
            short of extraordinary.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f9f1dc] text-[#d4a43c]">
                <feature.icon size={24} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
