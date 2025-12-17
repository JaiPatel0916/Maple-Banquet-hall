import { motion, AnimatePresence } from "framer-motion";

const StepWrapper = ({ step, children }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default StepWrapper;
