import React from "react";

import { Link } from "react-router-dom";

const ShopHeader = () => {
    return (
        <header className="sticky top-0 flex justify-center p-12 bg-red">
            <nav className="flex items-center gap-4">
                <Link to="/">products</Link>
                <Link to="/">Running Events</Link>
                <Link to="/">Shop Reviews</Link>
            </nav>
        </header>
    );
};

export default ShopHeader;
