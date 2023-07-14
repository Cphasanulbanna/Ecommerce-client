import React, { useState } from "react";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

import { productData } from "../static/data";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedData, setSearchedData] = useState([]);

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
                                className="input input-bordered focus:outline-none w-full border-violet-900 h-full"
                            />
                            <button className="btn btn-square bg-violet-900 hover:bg-purple-800 h-full">
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
                    <button className="btn bg-violet-900 hover:bg-purple-800 text-white">
                        <span>Become a seller</span> <BiRightArrowAlt size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
