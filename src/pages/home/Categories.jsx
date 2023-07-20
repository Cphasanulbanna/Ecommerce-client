import React from "react";

import { motion } from "framer-motion";

import { categoriesData } from "../../static/data";

const Categories = () => {
    return (
        <div className="section-style">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hiddem: {},
                    visible: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
                className="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 wrapper"
            >
                {categoriesData &&
                    categoriesData.map((category) => (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            key={category.id}
                            className="flex items-center gap-2 sm:gap-4 cursor-pointer bg-white rounded-lg overflow-hidden p-2 sm:p-4 shadow-sm md:hover:scale-[1.02] transition duration-300"
                        >
                            <div className="w-[45px] h-[45px] sm:w-[85px] sm:h-[85px] object-cover">
                                <img
                                    src={category.image_Url}
                                    alt="category"
                                />
                            </div>
                            <h4 className="text-sm font-bold sm:text-base">{category.title}</h4>
                        </motion.div>
                    ))}
            </motion.div>
        </div>
    );
};

export default Categories;
