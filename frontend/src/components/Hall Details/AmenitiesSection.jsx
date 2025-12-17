import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Maximize,
  Lamp,
  Music,
  Car,
  Sofa,
  Camera,
  Sparkles,
} from "lucide-react";

const amenities = [
  { icon: Users, label: "200 Guest Capacity" },
  { icon: Maximize, label: "Spacious Hall" },
  { icon: Lamp, label: "Crystal Chandeliers" },
  { icon: Music, label: "Sound System" },
  { icon: Car, label: "Parking Space" },
  { icon: Sofa, label: "Comfortable Seating" },
  { icon: Camera, label: "Photo-Ready Décor" },
  { icon: Sparkles, label: "Stage Setup" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AmenitiesSection() {
  return (
    <section className="bg-[#f6f2ee] py-24">
      <div className="mx-auto max-w-7xl px-6">
   
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#d4a43c]">
            Amenities
          </p>
          <h2 className="mt-2 text-4xl font-serif font-semibold text-gray-900">
            What We Offer
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f9f1dc] text-[#d4a43c]">
                <item.icon size={24} />
              </div>

              <p className="text-sm font-medium text-gray-800">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}