import React from "react";

import { Routes, Route } from "react-router-dom";

import CreateShop from "../../pages/shop/RegisterShop";
import ShopActivation from "../../pages/shop/ShopActivation";
import LoginShop from "../../pages/shop/LoginShop";
import ShopHomepage from "../../pages/ShopHomepage";

import SellerProtectedRouteAfterLogin from "./SellerProtectedRouteAfterLogin";
import SellerPrivateRoute from "./SellerPrivateRoute";
import SellerDashboardRouter from "./SellerDashboardRouter";
import ShopProducts from "../../pages/shop/ShopProducts";
import ShopEvents from "../../pages/shop/ShopEvents";
import ShopReviews from "../../pages/shop/ShopReviews";

const ShopRouter = () => {
    return (
        <Routes>
            <Route
                path="/:id"
                element={<ShopHomepage />}
            />

            <Route element={<SellerProtectedRouteAfterLogin />}>
                <Route
                    path="/create-shop"
                    element={<CreateShop />}
                />
                <Route
                    path="/activation/:activation_token"
                    element={<ShopActivation />}
                />
                <Route
                    path="/login"
                    element={<LoginShop />}
                />
            </Route>

            <Route element={<SellerPrivateRoute />}>
                <Route
                    path="/dashboard/*"
                    element={<SellerDashboardRouter />}
                />
            </Route>
        </Routes>
    );
};

export default ShopRouter;
