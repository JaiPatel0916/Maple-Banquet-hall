import React from "react";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "In-House Catering",
    desc: "Delicious multi-cuisine menu options",
    icon: "🍴",
  },
  {
    title: "Sound System",
    desc: "Professional audio equipment",
    icon: "🎵",
  },
  {
    title: "Décor Services",
    desc: "Customizable event decorations",
    icon: "🌼",
  },
  {
    title: "Photo Zones",
    desc: "Beautiful backdrops for memories",
    icon: "📷",
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
    <section className="bg-[#f6f2ee] py-[80px]">
      <div className="mx-auto max-w-[1320px] px-6">

        <div className="mb-[48px] text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4a43c]">
            Facilities
          </p>
          <h2 className="mt-3 text-[40px] md:text-[48px] font-serif font-semibold text-[#1c1c1c]">
            Everything You Need
          </h2>
        </div>


      

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[24px]">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-white rounded-[16px] px-5 pt-7 pb-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)]"

         

            

              <div className="mx-auto mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#fbf3e3] text-[20px] text-[#d4a43c]">
                {item.icon}
              </div>



              <h3 className="font-serif text-[14.5px] font-semibold text-[#1c1c1c]">
                {item.title}
              </h3>


   


              <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#6b6b6b]">
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
