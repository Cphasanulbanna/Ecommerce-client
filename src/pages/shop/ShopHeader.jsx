import React from "react";

import { NavLink, useParams } from "react-router-dom";

const ShopHeader = ({ setActivePage, activePage }) => {
    const { id } = useParams();
    return (
        <header className="flex justify-center p-4 shadow-md">
            <nav className="flex items-center gap-4">
                <div
                    className={`${
                        activePage === "products" ? "text-red" : ""
                    } font-semibold text-deep-blue  cursor-pointer`}
                    onClick={() => setActivePage("products")}
                >
                    products
                </div>
                <div
                    className={`${
                        activePage === "events" ? "text-red" : ""
                    } font-semibold text-deep-blue  cursor-pointer`}
                    onClick={() => setActivePage("events")}
                >
                    Running Events
                </div>
                <div
                    className={`${
                        activePage === "reviews" ? "text-red" : ""
                    } font-semibold text-deep-blue  cursor-pointer`}
                    onClick={() => setActivePage("reviews")}
                >
                    Shop Reviews
                </div>
            </nav>
        </header>
    );
};

export default ShopHeader;
