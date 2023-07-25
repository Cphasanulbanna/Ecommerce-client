import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import ProductRouter from "./ProductRouter";
import HomeRouter from "./HomeRouter";
import UserRouter from "./UserRouter";
import PrivateRoute from "./PrivateRoute";
import ShopRouter from "./ShopRouter";

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
                path="/shop/*"
                element={<ShopRouter />}
            />

            <Route element={<PrivateRoute />}>
                <Route
                    path="/user/*"
                    element={<UserRouter />}
                />
            </Route>
        </Routes>
    );
};

export default AppRouter;
