import React, { useState } from "react";

import ProfileSidebar from "./user/ProfileSidebar";
import Profile from "./user/Profile";

const ProfilePage = () => {
    const [active, setActive] = useState(1);

    return (
        <section className="min-h-screen bg-violet-100 sm:py-16">
            <div className="relative flex justify-between profile-wrapper">
                <ProfileSidebar
                    active={active}
                    setActive={setActive}
                />
                <Profile active={active} />
            </div>
        </section>
    );
};

export default ProfilePage;
