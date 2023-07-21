import React from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "../NavBar";
import Header from "../Header";

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
