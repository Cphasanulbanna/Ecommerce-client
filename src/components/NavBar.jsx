import React, { useState } from "react";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { categoriesData } from "../static/data";

import { NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [viewCategories, setViewCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const navigate = useNavigate();

    const filterProductsByCategory = (category) => {
        try {
            category && navigate(`/products?category=${category}`);
            setSelectedCategory(category.title);
            setViewCategories(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav
            className={`${viewCategories ? "overflow-visible" : ""}  
            py-2 bg-violet-900 text-white`}
        >
            <div className="flex items-center justify-between sm:gap-14 md:gap-20 wrapper">
                <div className="relative w-1/4 -mb-2 text-black bg-white rounded-t-sm shadow-md">
                    <div
                        onClick={() => setViewCategories((prev) => !prev)}
                        className="flex items-center p-3 cursor-pointer"
                    >
                        <BiSolidCategoryAlt
                            size={30}
                            className="mr-3 text-violet-900"
                        />
                        <h2>{selectedCategory ? selectedCategory : "All categories"}</h2>
                        <AiFillCaretDown
                            size={20}
                            className="ml-auto text-violet-900"
                        />
                    </div>

                    <div
                        className={`${
                            viewCategories
                                ? "max-h-[65vh] py-4 transition-all duration-500 ease-in-out"
                                : "py-0  max-h-0"
                        } bg-white absolute z-40 flex flex-col w-full overflow-y-auto text-black shadow-sm rounded-b-sm`}
                    >
                        {categoriesData?.map((category) => (
                            <div
                                key={category.id}
                                onClick={() => filterProductsByCategory(category?.title)}
                                className="flex items-center gap-2 relative sm:before:absolute sm:before:w-full sm:before:h-full sm:before:inset-0 sm:before:hover:bg-slate-100 sm:before:opacity-[0.5] cursor-pointer"
                            >
                                <div className="w-[50px] h-[50px]">
                                    <img
                                        src={category.image_Url}
                                        alt="category"
                                        className="objectfit-cover"
                                    />
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center w-2/4 gap-5">
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/products"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/best-selling"
                    >
                        Best selling
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-yellow" : "")}
                        to="/events"
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
                <div className="flex items-center justify-end w-1/4 gap-5">
                    <button className="relative">
                        <FaCartPlus size={25} />
                        <span className="absolute -top-2 -right-1 z-10 w-[15px] leading-[6px] h-[15px] text-white rounded-full overflow-hidden flex justify-center items-center text-xs bg-green-600">
                            1
                        </span>
                    </button>
                    <button className="relative">
                        <AiFillHeart size={25} />
                        <span className="absolute -top-2 -right-1 z-10 w-[15px] leading-[6px] h-[15px] text-white rounded-full overflow-hidden flex justify-center items-center text-xs bg-green-600">
                            1
                        </span>
                    </button>
                    <button>
                        <BsFillPersonFill size={25} />
                    </button>
                </div>
            </div>
        </nav>
    );
};
