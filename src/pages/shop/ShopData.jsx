import React from "react";

import ShopProducts from "./ShopProducts";
import ShopEvents from "./ShopEvents";
import ShopReviews from "./ShopReviews";

const ShopData = ({ activePage }) => {
    return (
        <div className="h-full pb-12 overflow-y-scroll bg-amber-800">
            {activePage === "products" && <ShopProducts />}{" "}
            {activePage === "events" && <ShopEvents />}
            {activePage === "reviews" && <ShopReviews />}
        </div>
    );
};

export default ShopData;
