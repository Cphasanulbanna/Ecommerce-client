import React from "react";

import { motion } from "framer-motion";

import Home from "./home/Home";
import Branding from "./home/Branding";
import Categories from "./home/Categories";
import Events from "./home/Events";
import FeaturedProducts from "./home/FeaturedProduct";
import Subscribe from "./home/Subscribe";
import Footer from "../components/general/Footer";
import BestSelling from "./home/BestSelling";

const Homepage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Home />
            <Branding />
            <Categories />
            <BestSelling />
            <Events />
            <FeaturedProducts />
            <Subscribe />
            <Footer />
        </motion.div>
    );
};

export default Homepage;
