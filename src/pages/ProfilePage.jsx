import React, { useState } from "react";

import Header from "../components/general/Header";
import NavBar from "../components/general/NavBar";
import ProfileSidebar from "./user/ProfileSidebar";
import Profile from "./user/Profile";

const ProfilePage = () => {
    const [active, setActive] = useState(1);
    return (
        <section className="">
            <Header />
            <NavBar />
            <div className="md:h-[calc(100vh-155px)] sm:py-10 bg-violet-100">
                <div className="flex justify-between h-full wrapper">
                    <ProfileSidebar
                        active={active}
                        setActive={setActive}
                    />
                    <Profile active={active} />
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
