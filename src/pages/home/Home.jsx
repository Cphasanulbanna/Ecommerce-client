import React from "react";

import { motion } from "framer-motion";

import Background from "../../assets/images/spotlight.png";
import { FaShopify } from "react-icons/fa";

const Home = () => {
    return (
        <section className="pt-[150px] pb-3 bg-violet-100 lg:py-20 md:py-16">
            <section className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between wrapper">
                <div className="flex flex-col lg:w-[60%] md:w-[50%] w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="mb-4 text-center md:text-left"
                    >
                        <h1 className="main-heading">
                            Best Collection For <br className="hidden md:block" />
                            Home Decoration
                        </h1>

                        <p className="md:w-[75%] text-slate-400">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore
                            suscipit eos debitis consectetur iste minus? Nobis in dicta aut impedit,
                            laudantium fugiat esse quaerat. Et libero harum voluptate cupiditate!
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                        className="text-center md:text-left"
                    >
                        <button className="text-white btn bg-violet-900 hover:bg-purple-800 w-max">
                            <span className="">Shop Now</span>
                            <FaShopify size={20} />
                        </button>
                    </motion.div>
                </div>

                <div className="lg:w-[40%] md:w-[50%] bg-no-repeat bg-cover w-[55%] mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <img
                            src={Background}
                            alt="img"
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>
        </section>
    );
};

export default Home;
