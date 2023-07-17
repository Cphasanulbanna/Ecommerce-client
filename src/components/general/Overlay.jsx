import React from "react";

import { motion } from "framer-motion";

const Overlay = ({ children, onClick }) => {
    return (
        <motion.div
            className="absolute z-50 top-0 lef-0 w-full h-full bg-[#000000e1]"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Overlay;
