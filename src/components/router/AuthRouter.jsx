import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "../../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import Signup from "../../pages/auth/Signup";
import AccountActivation from "../../pages/auth/AccountActivation";
import ProtectedRouteAfterLogin from "./ProtectedRouterAfterLogin";

const AuthRouter = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route element={<ProtectedRouteAfterLogin />}>
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/signup"
                        element={<Signup />}
                    />
                </Route>

                <Route
                    path="/activation/:activation_token"
                    element={<AccountActivation />}
                />
            </Routes>
        </AuthLayout>
    );
};

export default AuthRouter;
