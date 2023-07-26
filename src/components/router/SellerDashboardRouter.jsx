import React from "react";

import { Routes, Route } from "react-router-dom";
import SellerDashboard from "../../pages/seller-dashboard/SellerDashboard";

const SellerDashboardRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<SellerDashboard />}
            />
        </Routes>
    );
};

export default SellerDashboardRouter;
