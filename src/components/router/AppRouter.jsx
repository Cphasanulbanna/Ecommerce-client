import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import ProductRouter from "./ProductRouter";
import HomeRouter from "./HomeRouter";
import UserRouter from "./UserRouter";

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
            <Route
                path="/user/*"
                element={<UserRouter />}
            />
        </Routes>
    );
};

export default AppRouter;
