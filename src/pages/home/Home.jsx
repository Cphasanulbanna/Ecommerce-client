import React from "react";

import { motion } from "framer-motion";

import Background from "../../assets/images/spotlight.png";
import { FaShopify } from "react-icons/fa";

const Home = () => {
    return (
        <section className="h-full home bg-violet-100">
            <section className="flex justify-between h-full wrapper">
                <div className="flex flex-col justify-center w-3/5 gap-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <h1 className="text-5xl font-bold">
                            Best Collection For <br />
                            Home Decoration
                        </h1>

                        <p className="w-[75%] text-slate-400">
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
                    >
                        <button className="text-white btn bg-violet-900 hover:bg-purple-800 w-max">
                            <span className="">Shop Now</span>
                            <FaShopify size={20} />
                        </button>
                    </motion.div>
                </div>

                <div className="w-2/5 h-full bg-no-repeat bg-cover">
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
