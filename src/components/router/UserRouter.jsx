import React from "react";

import { Routes, Route } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";

const UserRouter = () => {
    return (
        <Routes>
            <Route
                path="/profile"
                element={<ProfilePage />}
            />
        </Routes>
    );
};

export default UserRouter;
