import React from "react";

import { SellerDashboardHeader } from "./SellerDashboardHeader";
import SellerDashboardMenu from "./SellerDashboardMenu";
import { Outlet } from "react-router-dom";

const SellerDashboard = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <SellerDashboardHeader />
            <div className="flex justify-between">
                <SellerDashboardMenu />
                <Outlet />
            </div>
        </div>
    );
};

export default SellerDashboard;
