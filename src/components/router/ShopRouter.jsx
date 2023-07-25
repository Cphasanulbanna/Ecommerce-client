import React from "react";

import { Routes, Route } from "react-router-dom";

import CreateShop from "../../pages/shop/CreateShop";

const ShopRouter = () => {
    return (
        <Routes>
            <Route
                path="/create-shop"
                element={<CreateShop />}
            />
        </Routes>
    );
};

export default ShopRouter;
