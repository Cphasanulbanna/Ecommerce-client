import React from "react";

import { Routes, Route } from "react-router-dom";
import Profile from "../../pages/user/Profile";

const UserRouter = () => {
    return (
        <Routes>
            <Route
                path="/profile"
                element={<Profile />}
            />
        </Routes>
    );
};

export default UserRouter;
