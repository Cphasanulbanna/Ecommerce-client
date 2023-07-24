import React from "react";

import CurrentAddress from "./CurrentAddress";
import Orders from "./Orders";
import Refund from "./Refund";
import TrackOrder from "./TrackOrder";
import PaymentMethods from "./PaymentMethods";
import AddAddress from "./AddAddress";

const Profile = ({ active }) => {
    return (
        <div className="w-[fill] sm:px-8 px-3 pb-10 pt-24 sm:py-0 min-h-screen">
            {active === 1 && <CurrentAddress />} {active === 2 && <Orders />}{" "}
            {active === 4 && <Refund />}
            {active === 3 && <TrackOrder />} {active === 5 && <PaymentMethods />}{" "}
            {active === 6 && <AddAddress />}
        </div>
    );
};

export default Profile;
