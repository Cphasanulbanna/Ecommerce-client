import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import Homepage from "../../pages/Homepage";
import FAQ from "../../pages/FAQ";
import Header from "../Header";
import { NavBar } from "../NavBar";
import ProductsPage from "../../pages/ProductsPage";
import ProductsDetailsPage from "../../pages/ProductsDetailsPage";
import BestSellingPage from "../../pages/BestSellingPage";

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
                <Route
                    path="/products/:id"
                    element={<ProductsDetailsPage />}
                />
                <Route
                    path="/best-selling"
                    element={<BestSellingPage />}
                />
            </Routes>
        </>
    );
};

export default AppRouter;
