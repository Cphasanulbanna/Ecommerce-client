import React from "react";

import Address from "./Address";
import Orders from "./Orders";

const Profile = ({ active }) => {
    return (
        <div className="w-[fill] sm:px-8 px-3 pb-10 pt-24 sm:py-0 min-h-screen">
            {active === 1 && <Address />} {active === 2 && <Orders />}
        </div>
    );
};

export default Profile;
