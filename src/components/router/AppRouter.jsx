import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import Homepage from "../../pages/Homepage";
import FAQ from "../../pages/FAQ";
import Header from "../Header";
import { NavBar } from "../NavBar";

const AppRouter = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Routes>
                <Route
                    path="/auth/*"
                    element={<AuthRouter />}
                />
                <Route
                    path="/"
                    element={<Homepage />}
                />
                <Route
                    path="/faq"
                    element={<FAQ />}
                />
            </Routes>
        </>
    );
};

export default AppRouter;
