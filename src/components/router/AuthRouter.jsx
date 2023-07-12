import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "../../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import Signup from "../../pages/auth/Signup";

const AuthRouter = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/signup"
                    element={<Signup />}
                />
            </Routes>
        </AuthLayout>
    );
};

export default AuthRouter;
