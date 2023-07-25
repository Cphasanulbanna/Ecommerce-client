import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { isAuth } from "../../utils/utils";

const PrivateRoute = () => {
    const auth = isAuth();
    return auth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
