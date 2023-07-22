import React from "react";

import { NavLink } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";

const BottomNavigation = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 block px-4 py-2 bg-white sm:hidden">
            <div className="flex justify-between gap-4">
                <NavLink
                    className={({ isActive }) => (isActive ? "text-yellow" : "")}
                    to="/"
                >
                    <AiOutlineHome size={25} />
                </NavLink>
                <NavLink
                    end
                    className={({ isActive }) => (isActive ? "text-yellow" : "")}
                    to="/products"
                >
                    <TbCategory size={25} />
                </NavLink>
                <NavLink
                    end
                    className={({ isActive }) => (isActive ? "text-yellow" : "")}
                    to="/products/best-selling"
                >
                    <BiUserCircle size={25} />
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "text-yellow" : "")}
                    to="/faq"
                >
                    <AiOutlineShoppingCart size={25} />
                </NavLink>
            </div>
        </nav>
    );
};

export default BottomNavigation;
