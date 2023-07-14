import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import Homepage from "../../pages/Homepage";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/auth/*"
                element={<AuthRouter />}
            />
            <Route
                path="/"
                element={<Homepage />}
            />
        </Routes>
    );
};

export default AppRouter;
