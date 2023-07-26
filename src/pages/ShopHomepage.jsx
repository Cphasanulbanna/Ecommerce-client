import React from "react";

import ShopProfile from "./shop/ShopProfile";
import ShopData from "./shop/ShopData";
import ShopHeader from "./shop/ShopHeader";

const ShopHomepage = () => {
    return (
        <section className="relative flex justify-between">
            <ShopProfile />
            <div className="relative flex flex-col w-full">
                <ShopHeader />
                <ShopData />
            </div>
        </section>
    );
};

export default ShopHomepage;
