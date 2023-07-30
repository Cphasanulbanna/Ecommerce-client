import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { sellerAuth } from "../../utils/utils";

const SellerProtectedRouteAfterLogin = () => {
    const auth = sellerAuth();
    return auth ? <Navigate to={"/"} /> : <Outlet />;
};

export default SellerProtectedRouteAfterLogin;
