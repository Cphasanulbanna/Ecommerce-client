import React from "react";

import { Routes, Route } from "react-router-dom";

import ProductsPage from "../../pages/product/ProductsPage";
import BestSellingPage from "../../pages/product/BestSellingPage";
import EventsPage from "../../pages/product/EventsPage";
import ProductsDetailsPage from "../../pages/product/ProductsDetailsPage";
import Header from "../Header";
import NavBar from "../NavBar";

const ProductRouter = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={<ProductsPage />}
                />
                <Route
                    path="/best-selling"
                    element={<BestSellingPage />}
                />
                <Route
                    path="/events"
                    element={<EventsPage />}
                />
                <Route
                    path="/:id"
                    element={<ProductsDetailsPage />}
                />
            </Routes>
        </>
    );
};

export default ProductRouter;
