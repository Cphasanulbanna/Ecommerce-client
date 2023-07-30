import React from "react";

import { Routes, Route } from "react-router-dom";

import SellerDashboard from "../../pages/seller-dashboard/SellerDashboard";
import CreateProduct from "../../pages/seller-dashboard/CreateProduct";

const SellerDashboardRouter = () => {
    return (
        <Routes>
            <Route element={<SellerDashboard />}>
                <Route
                    path="/create-product"
                    element={<CreateProduct />}
                />
            </Route>
        </Routes>
    );
};

export default SellerDashboardRouter;
