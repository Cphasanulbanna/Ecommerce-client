import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { sellerAuth } from "../../utils/utils";

const SellerPrivateRoute = () => {
    const auth = sellerAuth();
    return auth ? <Outlet /> : <Navigate to={-1} />;
};

export default SellerPrivateRoute;
