import React from "react";

import { motion } from "framer-motion";

import { brandingData } from "../../static/data";

const Branding = () => {
    return (
        <div className="section-style">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="rounded-md md:shadow-md md:grid md:p-6 md:bg-white md:gap-8 xl:gap-5 sm:grid-cols-2 gap-9 xl:grid-cols-4 wrapper">
                    {brandingData &&
                        brandingData?.map((data) => (
                            <div
                                key={data.id}
                                className="flex items-center gap-4 p-4 mb-4 bg-white rounded-md shadow-sm md:shadow-none md:p-0"
                            >
                                <div className="mb-3">{data.icon}</div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p>{data.Description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Branding;
