import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import ProductRouter from "./ProductRouter";
import HomeRouter from "./HomeRouter";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/auth/*"
                element={<AuthRouter />}
            />

            <Route
                path="/products/*"
                element={<ProductRouter />}
            />
            <Route
                path="/*"
                element={<HomeRouter />}
            />
        </Routes>
    );
};

export default AppRouter;
