import React from "react";

import Address from "./Address";
import Orders from "./Orders";

const Profile = ({ active }) => {
    return (
        <div className="w-[fill] px-8">
            {active === 1 && <Address />} {active === 2 && <Orders />}
        </div>
    );
};

export default Profile;
