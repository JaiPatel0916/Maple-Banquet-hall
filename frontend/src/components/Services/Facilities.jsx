import React from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  Music,
  Flower2,
  Camera,
  Car,
  Lightbulb
} from "lucide-react";


const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

const iconFloat = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const facilities = [
  { title: "In-House Catering", desc: "Delicious multi-cuisine menu options", icon: Utensils },
  { title: "Sound System", desc: "Professional audio equipment", icon: Music },
  { title: "Décor Services", desc: "Customizable event decorations", icon: Flower2 },
  { title: "Photo Zones", desc: "Beautiful backdrops for memories", icon: Camera },
  { title: "Parking", desc: "Ample parking for guests", icon: Car },
  { title: "Lighting", desc: "Ambient and accent lighting", icon: Lightbulb },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-[#f6f2ee] py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-[48px] text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4a43c]">
            Facilities
          </p>
          <h2 className="mt-3 text-[40px] md:text-[48px] font-serif font-semibold text-[#1c1c1c]">
            Everything You Need
          </h2>
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[24px]">

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">

          {facilities.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(212,164,60,0.18)",
                }}
                className="bg-white rounded-[16px] px-6 pt-8 pb-7 text-center transition"
              >
             
                <motion.div
                  variants={iconFloat}
                  animate="animate"
                  className="mx-auto mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#fbf3e3]"
                >
                  <Icon size={22} className="text-[#d4a43c]" />
                </motion.div>

                <h3 className="font-serif text-[14.5px] font-semibold text-[#1c1c1c]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#6b6b6b]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
</div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
