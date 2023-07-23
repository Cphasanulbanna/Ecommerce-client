import React from "react";

import { Routes, Route } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";
import Header from "../general/Header";

const UserRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/profile"
                    element={<ProfilePage />}
                />
            </Routes>
        </>
    );
};

export default UserRouter;
