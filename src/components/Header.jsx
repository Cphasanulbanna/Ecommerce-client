import React, { useState } from "react";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { productData } from "../static/data";
import { categoriesData } from "../static/data";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedData, setSearchedData] = useState([]);
    const [viewCategories, setViewCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchTerm(value);

        const filteredProducts =
            productData &&
            productData.filter((product) => product.name.toLowerCase().includes(searchTerm));
        setSearchedData(filteredProducts);
    };

    return (
        <header className="">
            <div className="flex justify-between items-center sm:gap-14 md:gap-20 px-16 py-4 mx-auto">
                <div className="sm:w-1/4">
                    <Link to="/">
                        <PiShoppingCartSimpleFill size={50} />
                    </Link>
                </div>
                <div className="sm:w-2/4 mx-auto">
                    <div className="form-control h-[48px]">
                        <div className="input-group relative">
                            <input
                                type="text"
                                placeholder="Search…"
                                onChange={handleSearch}
                                value={searchTerm}
                                className="input input-bordered focus:outline-none w-full border-purple-700 h-full"
                            />
                            <button className="btn btn-square bg-purple-600 h-full">
                                <BsSearch
                                    color="#fff"
                                    size={20}
                                />
                            </button>
                            {searchedData.length && searchTerm ? (
                                <div
                                    className={`absolute top-[50px] w-full bg-slate-50 shadow-sm z-10`}
                                >
                                    {searchTerm &&
                                        searchedData?.map((product, index) => {
                                            const productName = product.name;
                                            const modifiedProductName = productName.replace(
                                                /\+/g,
                                                "-"
                                            );

                                            return (
                                                <Link
                                                    key={product.id}
                                                    to={`/product/${modifiedProductName}`}
                                                >
                                                    <div className="w-full flex items-start py-3">
                                                        <div className="w-[40px] h-[40px] mr-4">
                                                            <img
                                                                src={product.image_Url[0].url}
                                                                alt="product"
                                                            />
                                                        </div>
                                                        <h1>{product.name}</h1>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/4 flex justify-end">
                    <button className="btn bg-purple-500 text-white">
                        Become a seller <BiRightArrowAlt size={22} />
                    </button>
                </div>
            </div>

            <div
                className={`${
                    viewCategories ? "overflow-visible" : "overflow-hidden"
                } relative flex justify-between items-center sm:gap-14 md:gap-20 px-16 py-2 mx-auto bg-violet-900 text-white`}
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
                        to="/"
                        activeClass={"text-red"}
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        smooth={true}
                        to="/"
                        activeClass={"text-red"}
                    >
                        Best Selling
                    </ScrollLink>
                    <ScrollLink
                        smooth={true}
                        to="/"
                        activeClass={"text-red"}
                    >
                        Products
                    </ScrollLink>
                    <ScrollLink
                        smooth={true}
                        to="/"
                        activeClass={"text-red"}
                    >
                        Events
                    </ScrollLink>
                    <ScrollLink
                        smooth={true}
                        to="/"
                        activeClass={"text-red"}
                    >
                        FAQ
                    </ScrollLink>
                </div>
                <div className="w-1/4 flex justify-end items-center gap-3">
                    <button>
                        <FaCartPlus size={25} />
                    </button>
                    <button>
                        <AiFillHeart size={25} />
                    </button>
                    <button>
                        <BsFillPersonFill size={25} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
