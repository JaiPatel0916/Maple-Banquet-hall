import React from "react";
import { motion } from "framer-motion";

const GalleryHeader = () => {
  return (
    <section className="bg-[#f6f2ee] py-[110px]">
      <div className="mx-auto max-w-[1320px] px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4a43c]"
        >
          Our Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-black mb-3 leading-tight"
          >
          Visual{" "}
          <span className="italic font-serif text-[#d4a43c]">
            Journey
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.8] text-[#6b6b6b]"
        >
          Explore our stunning venue and see the beautiful events we&apos;ve hosted.
          Every image tells a story of celebration and joy.
        </motion.p>

      </div>
    </section>
  );
};

export default GalleryHeader;
