import React from "react";

import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { AiOutlineFileAdd, AiOutlineSetting, AiOutlineTags } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import { RiCoupon2Line, RiRefundLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";

const SellerDashboardMenu = () => {
    const activeStyle = ({ isActive }) => {
        return {
            color: isActive ? "#4c1d95" : "",
        };
    };
    return (
        <div className="w-1/5 h-screen p-6 shadow-sm bg-slate-100">
            <div className="flex flex-col gap-8">
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <RxDashboard size={25} />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <FiShoppingBag size={25} />
                    All Orders
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <BsBoxSeam size={25} />
                    All Products
                </NavLink>
                <NavLink
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                    to="/shop/dashboard/create-product"
                >
                    <AiOutlineFolderAdd size={25} />
                    Create Product
                </NavLink>
                <NavLink
                    style={activeStyle}
                    to="/shop/dashboard/all-events"
                    className="flex items-center gap-2 text-base"
                >
                    <AiOutlineTags size={25} />
                    All Events
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <AiOutlineFileAdd size={25} />
                    Create Events
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <GiMoneyStack size={25} />
                    Withdraw Money
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <BiMessageDetail size={25} />
                    Shop Inbox
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <RiCoupon2Line size={25} />
                    Coupons
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <RiRefundLine size={25} />
                    Refunds
                </NavLink>
                <NavLink
                    to="/shop/dashboard/"
                    style={activeStyle}
                    className="flex items-center gap-2 text-base"
                >
                    <AiOutlineSetting size={25} />
                    Settings
                </NavLink>
            </div>
        </div>
    );
};

export default SellerDashboardMenu;
