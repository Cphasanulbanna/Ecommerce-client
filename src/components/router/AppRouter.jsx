import React from "react";

import { Routes, Route } from "react-router-dom";

import AuthRouter from "./AuthRouter";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/auth/*"
                element={<AuthRouter />}
            />
        </Routes>
    );
};

export default AppRouter;
