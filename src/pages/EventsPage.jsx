import React from "react";
import Events from "./home/Events";

import { motion } from "framer-motion";

const EventsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="py-8 bg-violet-100 sm:py-16"
        >
            <div className="flex flex-col gap-6 sm:gap-12">
                <Events inPage={true} />
                <Events inPage={true} />
                <Events inPage={true} />
            </div>
        </motion.div>
    );
};

export default EventsPage;
