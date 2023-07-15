import React from "react";

import Home from "./home/Home";
import BestSelling from "./home/BestSelling";
import Header from "../components/Header";
import { NavBar } from "../components/NavBar";
import Branding from "./home/Branding";

const Homepage = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Home />
            <Branding />
            <BestSelling />
        </>
    );
};

export default Homepage;
