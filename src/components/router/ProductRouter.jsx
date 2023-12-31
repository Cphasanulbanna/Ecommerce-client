import React from "react";

import { Routes, Route } from "react-router-dom";

import ProductsPage from "../../pages/ProductsPage";
import BestSellingPage from "../../pages/BestSellingPage";
import EventsPage from "../../pages/EventsPage";
import ProductsDetailsPage from "../../pages/product/ProductsDetailsPage";
import Header from "../general/Header";
import NavBar from "../general/NavBar";
import BottomNavigation from "../general/BottomNavigation";
import Footer from "../general/Footer";

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
            {/* <Footer /> */}
            <BottomNavigation />
        </>
    );
};

export default ProductRouter;
