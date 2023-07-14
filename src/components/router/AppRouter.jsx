import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import HomePage from "../LandingPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/auth/*"
                element={<AuthRouter />}
            />
            <Route
                path="/"
                element={<HomePage />}
            />
        </Routes>
    );
};

export default AppRouter;
