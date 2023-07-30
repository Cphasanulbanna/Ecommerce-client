import React from "react";

import ShopProfile from "./shop/ShopProfile";
import ShopData from "./shop/ShopData";
import ShopHeader from "./shop/ShopHeader";
import { useState } from "react";

const ShopHomepage = () => {
    const [activePage, setActivePage] = useState("products");
    return (
        <section className="relative flex justify-between max-h-screen overflow-hidden">
            <ShopProfile />
            <div className="relative w-full">
                <ShopHeader
                    setActivePage={setActivePage}
                    activePage={activePage}
                />
                <ShopData activePage={activePage} />
            </div>
        </section>
    );
};

export default ShopHomepage;
