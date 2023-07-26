import React from "react";

import { Routes, Route } from "react-router-dom";

import CreateShop from "../../pages/shop/CreateShop";
import ShopActivation from "../../pages/shop/ShopActivation";

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
        </Routes>
    );
};

export default ShopRouter;
