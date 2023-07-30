import React from "react";

import { SellerDashboardHeader } from "./SellerDashboardHeader";
import SellerDashboardMenu from "./SellerDashboardMenu";

const SellerDashboard = () => {
    return (
        <div className="flex flex-col">
            <SellerDashboardHeader />
            <div className="flex justify-between">
                <SellerDashboardMenu />
            </div>
        </div>
    );
};

export default SellerDashboard;
