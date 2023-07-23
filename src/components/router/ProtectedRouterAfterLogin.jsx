import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { isAuth } from "../../utils/utils";

const ProtectedRouteAfterLogin = () => {
    const auth = isAuth();
    return auth ? <Navigate to={"/"} /> : <Outlet />;
};

export default ProtectedRouteAfterLogin;
