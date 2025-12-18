import React from "react";
import { motion } from "framer-motion";

import imgMain from "../../assets/images/hero-banquet.jpg";
import imgTop1 from "../../assets/images/hall-1.jpg";
import imgTop2 from "../../assets/images/hall-2.jpg";
import imgBottom from "../../assets/images/catering.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function GallerySection() {
  return (
    <section className="bg-[#f6f2ee] py-8">
      <div className="mx-auto max-w-5xl 2xl:max-w-6xl px-4">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#d4a43c]">
            Gallery
          </p>
          <h2 className="mt-1 text-2xl font-serif font-semibold text-gray-900">
            Experience the Elegance
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[12px] text-gray-600">
            A glimpse of our premium venue.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* Image 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:row-span-2 overflow-hidden rounded-xl"
          >
            <img
              src={imgMain}
              alt="Banquet Hall"
              className="
              h-[260px]
              md:h-full
              2xl:h-[470px]
              w-full object-cover
             transition-transform duration-500 hover:scale-105"
            />

          </motion.div>

          {/* Image 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={imgTop1}
              alt="Luxury Interior"
              className="
                h-[260px]
                md:h-[140px]
                2xl:h-[200px]
                w-full object-cover
                transition-transform duration-500 hover:scale-105
              "
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={imgTop2}
              alt="Decor Setup"
              className="
                h-[260px]
                md:h-[140px]
                2xl:h-[200px]
                w-full object-cover
                transition-transform duration-500 hover:scale-105
              "
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 overflow-hidden rounded-xl"
          >
            <img
              src={imgBottom}
              alt="Catering Setup"
              className="
                h-[260px]
                md:h-[160px]
                2xl:h-[260px]
                w-full object-cover
                transition-transform duration-500 hover:scale-105
              "
            />
          </motion.div>

        </div>

        {/* Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 text-center"
        >
          <button className="rounded-md bg-[#d4a43c] px-5 py-2 text-[12px] font-semibold text-black transition hover:bg-[#c29635]">
            View Gallery
          </button>
        </motion.div>

      </div>
    </section>
  );
}
