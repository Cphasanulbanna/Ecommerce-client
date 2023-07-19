import React, { useEffect, useRef, useState } from "react";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

import { categoriesData } from "../static/data";

import { NavLink, useNavigate } from "react-router-dom";

import Cart from "../pages/product/Cart";

import useOutsideClick from "../hooks/useOutsideclick";
import useOutsideScroll from "../hooks/useOutsideScroll";
import Wishlist from "../pages/product/Wishlist";

const NavBar = () => {
    const [opencategories, setOpenCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [openCart, setOpenCart] = useState(false);
    const [openWishlist, setOpenWishlist] = useState(false);

    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const url = `/products?category=${selectedCategory}`;
        setOpenCategories(false);
        navigate(url);
    }, [selectedCategory]);

    const closeCart = () => {
        setOpenCart(false);
    };

    const closeWishlist = () => {
        setOpenWishlist(false);
    };

    useOutsideClick(dropdownRef, null, () => setOpenCategories(false));

    useOutsideScroll(openCart);
    useOutsideScroll(openWishlist);

    return (
        <>
            {openCart && <Cart closeCart={closeCart} />}

            {openWishlist && <Wishlist closeWishlist={closeWishlist} />}
            <nav
                className={`${opencategories ? "overflow-visible" : ""}  
            py-2 bg-violet-900 text-white`}
            >
                <div
                    ref={dropdownRef}
                    className="items-center justify-between hidden lg:flex sm:gap-14 md:gap-20 wrapper"
                >
                    <div className="relative lg:w-[290px] md:w-[260px] mb-2 text-black bg-white rounded-t-sm shadow-md">
                        <div
                            onClick={() => setOpenCategories((prev) => !prev)}
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
                                opencategories
                                    ? "max-h-[65vh] py-4 transition-all duration-500 ease-in-out"
                                    : "py-0  max-h-0"
                            } bg-white absolute z-40 flex flex-col w-full overflow-y-auto text-black shadow-sm rounded-b-sm`}
                        >
                            {categoriesData?.map((category) => (
                                <div
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.title)}
                                    className={`${
                                        selectedCategory === category?.title
                                            ? "text-violet-900 font-bold"
                                            : ""
                                    } flex items-center gap-2 relative sm:before:absolute sm:before:w-full sm:before:h-full sm:before:inset-0 sm:before:hover:bg-slate-100 sm:before:opacity-[0.5] cursor-pointer`}
                                >
                                    <div className="w-[50px] h-[50px]">
                                        <img
                                            src={category.image_Url}
                                            alt="category"
                                            className="objectfit-cover"
                                        />
                                    </div>
                                    <h3>{category.title}</h3>
                                    {selectedCategory === category.title && (
                                        <div>
                                            <AiFillCheckCircle
                                                size={20}
                                                className="text-violet-900"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="items-center justify-center hidden gap-5 lg:flex">
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
                    <div className="items-center justify-end hidden gap-5 lg:flex">
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
                        <button>
                            <BsFillPersonFill size={25} />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default React.memo(NavBar);
