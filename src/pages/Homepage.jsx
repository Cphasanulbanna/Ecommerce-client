import React, { useEffect } from "react";

import Home from "./home/Home";
import Header from "../components/Header";
import { NavBar } from "../components/NavBar";
import Branding from "./home/Branding";
import Categories from "./home/Categories";
import Events from "./home/Events";
import FeaturedProducts from "./home/FeaturedProduct";
import Subscribe from "./home/Subscribe";
import Footer from "../components/Footer";
import BestSelling from "./home/BestSelling";

const Homepage = () => {
    return (
        <>
            <Home />
            <Branding />
            <Categories />
            <BestSelling />
            <Events />
            <FeaturedProducts />
            <Subscribe />
            <Footer />
        </>
    );
};

export default Homepage;
