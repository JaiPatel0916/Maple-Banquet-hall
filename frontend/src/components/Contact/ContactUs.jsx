import React from "react";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <section className="bg-[#f6f2ee] py-[80px]">
      <div className="mx-auto max-w-[1320px] px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4a43c]"
        >
          Contact Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-[40px] md:text-[48px] font-serif font-semibold text-[#1c1c1c]"
        >
          Book Your{" "}
          <span className="italic font-serif text-[#d4a43c]">
            Event
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.8] text-[#6b6b6b]"
        >
          Ready to create unforgettable memories? Get in touch with us to discuss
          your event requirements and check availability.
        </motion.p>

      </div>
    </section>
  );
};

export default ContactHeader;
