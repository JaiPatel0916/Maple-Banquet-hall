import React from "react";
import { motion } from "framer-motion";

// Import images from assets
import weddingImg from "../../assets/images/wedding.jpeg";
import engagementImg from "../../assets/images/engagement.jpg";
import birthdayImg from "../../assets/images/birthday.jpg";
import corporateImg from "../../assets/images/corporate.jpg";
import familyImg from "../../assets/images/family.jpg";
import babyShowerImg from "../../assets/images/babyshower.png";
import partyImg from "../../assets/images/party.png";
import anniversaryImg from "../../assets/images/anniversary.jpg";

const events = [
 
  {
    title: "Engagement Ceremonies",
    desc: "Celebrate your engagement in a beautiful setting with loved ones.",
    image: engagementImg,
  },
  {
    title: "Birthday Parties",
    desc: "Make birthdays joyful and memorable with custom setups.",
    image: birthdayImg,
  },
  {
    title: "Corporate Events",
    desc: "Professional venue for conferences, meetings, and launches.",
    image: corporateImg,
  },
  {
    title: "Family Reunions",
    desc: "Warm and spacious venue for family gatherings.",
    image: familyImg,
  },
  {
    title: "Baby Shower",
    desc: "Celebrate the upcoming arrival with an elegant baby shower.",
    image: babyShowerImg,
  },
  {
    title: "Kitty Parties",
    desc: "Perfect place for fun social get-togethers with friends.",
    image: partyImg,
  },
  {
    title: "Anniversary Celebrations",
    desc: "Mark milestones with intimate or grand celebrations.",
    image: anniversaryImg,
  },
  {
    title: "Wedding Celebrations",
    desc: "Create the wedding of your dreams with elegant décor and catering.",
    image: weddingImg,
  },
];

const OurEvents = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4a43c]">
            Events We Host
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Perfect for <span className="italic text-[#d4a43c]">Every Occasion</span>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl bg-[#faf8f5] shadow-sm"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurEvents;
