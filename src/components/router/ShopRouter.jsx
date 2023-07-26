import React from "react";

import { Routes, Route } from "react-router-dom";

import CreateShop from "../../pages/shop/CreateShop";
import ShopActivation from "../../pages/shop/ShopActivation";
import LoginShop from "../../pages/shop/LoginShop";

const ShopRouter = () => {
    return (
        <Routes>
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
        </Routes>
    );
};

export default ShopRouter;
