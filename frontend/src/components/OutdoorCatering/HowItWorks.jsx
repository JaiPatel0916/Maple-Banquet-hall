import { motion } from "framer-motion";

const steps = [
    {
        step: "1",
        title: "Select Items",
        desc: "Browse our menu and select the dishes you'd like for your event.",
    },
    {
        step: "2",
        title: "Get Quote",
        desc: "Send your selection via WhatsApp and receive a detailed quote.",
    },
    {
        step: "3",
        title: "Enjoy",
        desc: "We deliver and set up everything for your perfect event.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const HowItWorks = () => {
    return (
        <section className="bg-[#f6f2ee] py-24">
            <div className="mx-auto max-w-6xl px-6">

          
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center text-3xl md:text-4xl font-serif font-semibold text-[#6e1b1b]"
                >
                    How It Works
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                >
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center"
                        >
                          
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f6ead5] text-[#d29922] font-semibold">
                                {item.step}
                            </div>

 
                            <h3 className="mb-3 text-lg font-semibold text-[#6e1b1b]">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;
