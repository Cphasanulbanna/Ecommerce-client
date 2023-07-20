import React, { useEffect, useState } from "react";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

import { productData } from "../static/data";
import useMediaQuery from "../hooks/useMediaQuery";
// import MobileMenu from "./general/MobileMenu";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedData, setSearchedData] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const screenSize = useMediaQuery();

    useEffect(() => {
        const filteredProducts =
            productData &&
            productData.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        setSearchedData(filteredProducts);
    }, [searchTerm]);

    return (
        <header className="bg-violet-100">
            {/* {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />} */}
            <div className="flex items-center justify-between py-2 lg:py-4 sm:gap-14 md:gap-20 wrapper">
                <div className="hidden lg:block w-max">
                    <Link to="/">
                        <PiShoppingCartSimpleFill
                            className="text-violet-900"
                            size={screenSize > 480 ? 50 : 40}
                        />
                    </Link>
                </div>
                <div className="mx-auto lg:w-[500px] md:w-[350px] sm:mx-0 w-full">
                    <div className="relative border-2 rounded-md border-violet-900 h-[40px] lg:h-[48px] flex justify-between">
                        <input
                            type="text"
                            placeholder="Search…"
                            onChange={handleSearch}
                            value={searchTerm}
                            className="w-full h-full border-none input input-bordered focus:outline-none text-violet-900 placeholder:text-violet-900 bg-violet-100"
                        />
                        <button className="flex items-center justify-center h-full btn-square bg-violet-900 hover:bg-purple-800">
                            <BsSearch
                                color="#fff"
                                size={20}
                            />
                        </button>
                        {searchedData.length !== 0 && searchTerm && (
                            <div
                                className={`absolute top-[50px] w-full bg-slate-50 shadow-sm z-10`}
                            >
                                {searchTerm &&
                                    searchedData.map((product) => {
                                        const productName = product.name;
                                        const modifiedProductName = productName.replaceAll(
                                            " ",
                                            "-"
                                        );

                                        return (
                                            <Link
                                                onClick={() => setSearchTerm("")}
                                                key={product.id}
                                                to={`/products/${modifiedProductName}`}
                                            >
                                                <div className="flex items-start w-full py-3">
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
                        )}
                    </div>
                </div>
                <div className="justify-end hidden lg:flex">
                    <button className="text-white btn bg-violet-900 hover:bg-purple-800">
                        <span>Become a seller</span> <BiRightArrowAlt size={22} />
                    </button>
                </div>
                <button
                    onClick={() => setOpenMenu(true)}
                    className="hidden sm:block lg:hidden"
                >
                    <GiHamburgerMenu
                        size={30}
                        className="text-violet-900"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
