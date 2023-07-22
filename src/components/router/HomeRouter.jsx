import React from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "../general/NavBar";
import Header from "../general/Header";

import HomePage from "../../pages/Homepage";
import FAQ from "../../pages/FAQ";
import BottomNavigation from "../general/BottomNavigation";

const HomeRouter = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/faq"
                    element={<FAQ />}
                />
            </Routes>
            <BottomNavigation />
        </>
    );
};

export default HomeRouter;
