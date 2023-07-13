import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import Home from "../../pages/home/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/auth/*"
                element={<AuthRouter />}
            />
            <Route
                path="/"
                element={<Home />}
            />
        </Routes>
    );
};

export default AppRouter;
