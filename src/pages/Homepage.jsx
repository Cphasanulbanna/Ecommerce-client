import React from "react";

import Home from "./home/Home";
import BestSelling from "./home/BestSelling";
import Header from "../components/Header";
import { NavBar } from "../components/NavBar";
import Branding from "./home/Branding";
import Categories from "./home/Categories";

const Homepage = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Home />
            <Branding />
            <Categories />
            <BestSelling />
        </>
    );
};

export default Homepage;
