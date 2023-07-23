import React from "react";

import Header from "../components/general/Header";
import NavBar from "../components/general/NavBar";
import ProfileSidebar from "./user/ProfileSidebar";
import Profile from "./user/Profile";
import { useState } from "react";

const ProfilePage = () => {
    const [active, setActive] = useState(1);
    return (
        <section className="h-full bg-violet-100">
            <Header />
            <NavBar />
            <div className="wrapper sm:py-10">
                <div className="flex justify-between">
                    <ProfileSidebar
                        active={active}
                        setActive={setActive}
                    />
                    <Profile />
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
