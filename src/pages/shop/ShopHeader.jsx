import React from "react";

import { Link, useParams } from "react-router-dom";

const ShopHeader = ({ setActivePage, activePage, isOwner = true }) => {
    const { id } = useParams();
    return (
        <header className="flex justify-between p-4 shadow-md h-[80px]">
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
            </nav>{" "}
            {isOwner && (
                <Link
                    to={`/shop/dashboard/${id}`}
                    className="font-normal text-white rounded-none bg-deep-blue hover:bg-deep-blue btn"
                >
                    Go to Dashboard
                </Link>
            )}
        </header>
    );
};

export default ShopHeader;
