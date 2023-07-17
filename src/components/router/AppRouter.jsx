import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import Homepage from "../../pages/Homepage";
import FAQ from "../../pages/FAQ";
import Header from "../Header";
import { NavBar } from "../NavBar";
import ProductsPage from "../../pages/ProductsPage";

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
                <Route
                    path="/products"
                    element={<ProductsPage />}
                />
            </Routes>
        </>
    );
};

export default AppRouter;
