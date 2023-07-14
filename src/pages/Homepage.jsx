import React from "react";

import Home from "./home/Home";
import BestSelling from "./home/BestSelling";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Homepage = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Home />
            <BestSelling />
        </>
    );
};

export default Homepage;
