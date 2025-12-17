import React from "react";
import { motion } from "framer-motion";

const ServicesHeader = () => {
  return (
    <section className="bg-[#f6f2ee] py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4a43c]"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl md:text-6xl font-serif font-bold text-gray-900"
        >
          Services &{" "}
          <span className="italic font-serif text-[#d4a43c]">
            Facilities
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-gray-600"
        >
          From intimate gatherings to grand celebrations, we offer comprehensive
          services to make your event perfect in every way.
        </motion.p>

      </div>
    </section>
  );
};

export default ServicesHeader;
