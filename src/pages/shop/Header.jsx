import React from "react";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsBoxSeamFill } from "react-icons/bs";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

import useMediaQuery from "../../hooks/useMediaQuery";

import { Link } from "react-router-dom";

export const Header = () => {
    const screenSize = useMediaQuery();
    return (
        <header className="bg-violet-100">
            <div className="flex items-center justify-between gap-10 wrapper">
                <div>
                    <Link to="/">
                        <PiShoppingCartSimpleFill
                            className="text-violet-900"
                            size={screenSize > 480 ? 50 : 40}
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link
                        className="w-[60px] h-[60px] rounded-full overflow-hidden"
                        to="/seller/:id"
                    >
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1192,h_670/random_logo_by_criticl_d7eqdvw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU"
                            alt="seller-logo"
                        />
                    </Link>
                </div>
                <nav className="flex items-center gap-5">
                    <Link to="/shop/dashboard/cupouns">
                        <RiCoupon3Fill size={25} />
                    </Link>
                    <Link to="/shop/dashboard/events">
                        <FaTags size={25} />
                    </Link>
                    <Link to="/shop/dashboard/products">
                        <BiSolidShoppingBags size={25} />
                    </Link>
                    <Link to="/shop/dashboard/orders">
                        <BsBoxSeamFill size={25} />
                    </Link>
                    <Link to="/shop/dashboard/messages">
                        <BsFillChatLeftDotsFill size={25} />
                    </Link>
                </nav>
            </div>
        </header>
    );
};
