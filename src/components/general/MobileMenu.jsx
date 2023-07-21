import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Overlay from "./Overlay";
import { FaCartPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const MobileMenu = ({ setOpenMenu }) => {
    return (
        <Overlay onClick={() => setOpenMenu(false)}>
            <div className="hidden absolute right-0 w-full p-4 bg-white lg:hidden sm:block max-w-[250px] overflow-hidden h-full">
                <div className="flex flex-col gap-4">
                    <button className="flex items-center gap-2">
                        <BsFillPersonFill size={25} />
                        <span>Profile</span>
                    </button>

                    <button
                        className="relative"
                        onClick={() => setOpenCart(true)}
                    >
                        <FaCartPlus size={25} />
                        <span className="absolute -top-2 -right-1 z-10 w-[15px] leading-[6px] h-[15px] text-white rounded-full overflow-hidden flex justify-center items-center text-xs bg-green-600">
                            1
                        </span>
                    </button>
                    <button
                        onClick={() => setOpenWishlist(true)}
                        className="relative"
                    >
                        <AiFillHeart size={25} />
                        <span className="absolute -top-2 -right-1 z-10 w-[15px] leading-[6px] h-[15px] text-white rounded-full overflow-hidden flex justify-center items-center text-xs bg-green-600">
                            1
                        </span>
                    </button>

                    <NavLink
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        end
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/products"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        end
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/products/best-selling"
                    >
                        Best selling
                    </NavLink>
                    <NavLink
                        end
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/products/events"
                    >
                        Events
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/faq"
                    >
                        FAQ
                    </NavLink>
                </div>
            </div>
        </Overlay>
    );
};

export default MobileMenu;
