import React from "react";

import { Routes, Route } from "react-router-dom";

import ProductsPage from "../../pages/ProductsPage";
import BestSellingPage from "../../pages/BestSellingPage";
import EventsPage from "../../pages/EventsPage";
import ProductsDetailsPage from "../../pages/product/ProductsDetailsPage";
import Header from "../Header";
import NavBar from "../NavBar";
import BottomNavigation from "../general/BottomNavigation";

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
            <BottomNavigation />
        </>
    );
};

export default ProductRouter;
