import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "../../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";

const AuthRouter = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </AuthLayout>
    );
};

export default AuthRouter;
