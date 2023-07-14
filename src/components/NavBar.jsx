import React, { useState } from "react";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { Link as ScrollLink } from "react-scroll";

import { categoriesData } from "../static/data";

import useScrollPosition from "../hooks/useScrollPosition";

const NavBar = () => {
    const [viewCategories, setViewCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const { scrollPos } = useScrollPosition();

    return (
        <div
            className={`${viewCategories ? "overflow-visible" : "overflow-hidden"} ${
                scrollPos > 70 ? "fixed z-10 top-0 left-0 right-0" : ""
            }
            }  flex justify-between items-center sm:gap-14 md:gap-20 px-16 py-2 mx-auto bg-violet-900 text-white`}
        >
            <div className="w-1/4 bg-white text-black rounded-t-sm -mb-2 shadow-md relative">
                <div
                    onClick={() => setViewCategories((prev) => !prev)}
                    className="flex items-center p-3 cursor-pointer"
                >
                    <BiSolidCategoryAlt
                        size={30}
                        className="mr-3"
                    />
                    <h2>{selectedCategory ? selectedCategory : "All categories"}</h2>
                    <AiFillCaretDown
                        size={20}
                        className="ml-auto"
                    />
                </div>

                <div
                    className={`${
                        viewCategories
                            ? "max-h-[65vh] py-4 transition-all duration-500 ease-in-out"
                            : "py-0  max-h-0"
                    } absolute flex flex-col w-full overflow-y-auto text-black shadow-sm rounded-b-sm transition-all duration-500 ease-in-out`}
                >
                    {categoriesData?.map((category) => (
                        <div
                            onClick={() => {
                                setSelectedCategory(category.title);
                                setViewCategories(false);
                            }}
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
            <div className="w-2/4 flex items-center justify-center gap-5">
                <ScrollLink
                    smooth={true}
                    spy={true}
                    to="home"
                    activeClass="text-yellow"
                    className={`text-white ${scrollPos < 163 ? "text-yellow" : ""}`}
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    smooth={true}
                    spy={true}
                    to="bestselling"
                    activeClass="text-yellow"
                    className="text-white"
                >
                    Best Selling
                </ScrollLink>
                <ScrollLink
                    smooth={true}
                    to="products"
                    activeClass="text-yellow"
                    className="text-white"
                >
                    Products
                </ScrollLink>
                <ScrollLink
                    smooth={true}
                    to="events"
                    activeClass="text-yellow"
                    className="text-white"
                >
                    Events
                </ScrollLink>
                <ScrollLink
                    smooth={true}
                    to="faq"
                    activeClass="text-yellow"
                    className="text-white"
                >
                    FAQ
                </ScrollLink>
            </div>
            <div className="w-1/4 flex justify-end items-center gap-5">
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
    );
};

export default NavBar;
