import React, { useEffect, useState } from "react";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

import { productData } from "../static/data";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedData, setSearchedData] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    useEffect(() => {
        const filteredProducts =
            productData &&
            productData.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        setSearchedData(filteredProducts);
    }, [searchTerm]);

    console.log(searchedData, "data");

    return (
        <header className="bg-violet-100">
            <div className="flex items-center justify-between py-4 sm:gap-14 md:gap-20 wrapper">
                <div className="sm:w-1/4">
                    <Link to="/">
                        <PiShoppingCartSimpleFill
                            className="text-violet-900"
                            size={50}
                        />
                    </Link>
                </div>
                <div className="mx-auto sm:w-2/4">
                    <div className="form-control h-[48px]">
                        <div className="relative input-group ">
                            <input
                                type="text"
                                placeholder="Search…"
                                onChange={handleSearch}
                                value={searchTerm}
                                className="w-full h-full border-2 input input-bordered focus:outline-none text-violet-900 placeholder:text-violet-900 border-violet-900 bg-violet-100"
                            />
                            <button className="h-full btn btn-square bg-violet-900 hover:bg-purple-800">
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

                                            console.log(productName, "product name");
                                            console.log(modifiedProductName, "modified name");

                                            return (
                                                <Link
                                                    // onClick={() => setSearchTerm("")}
                                                    key={product.id}
                                                    to={`/product/${modifiedProductName}`}
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
                </div>
                <div className="flex justify-end sm:w-1/4">
                    <button className="text-white btn bg-violet-900 hover:bg-purple-800">
                        <span>Become a seller</span> <BiRightArrowAlt size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
