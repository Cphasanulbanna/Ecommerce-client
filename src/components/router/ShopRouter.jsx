import React from "react";

import { Routes, Route } from "react-router-dom";

import CreateShop from "../../pages/shop/CreateShop";

const ShopRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<CreateShop />}
            />
        </Routes>
    );
};

export default ShopRouter;
