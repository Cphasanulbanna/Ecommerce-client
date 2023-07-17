import React from "react";

import { productData } from "../../static/data";

import { AiOutlineMessage } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

const ProductsDetailsPage = () => {
    const product = productData[0];
    return (
        <section className="py-16 bg-slate-50">
            <div className="wrapper-secondary">
                <div className="grid grid-cols-2 gap-5 p-10 bg-white rounded-md shadow-md">
                    <div className="flex flex-col gap-3">
                        <div>
                            <img
                                src={product.image_Url[0].url}
                                alt="product"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                <img
                                    src={product.shop.shop_avatar}
                                    alt="brand-image"
                                />
                            </div>
                            <p className="text-sky-500">{product.shop.name}</p>
                        </div>
                        <span>Ratings ({product.rating})</span>
                        <span>Sold {product.total_sell}</span>
                        <span>Stock {product.stock}</span>
                        <button className="text-white btn w-max bg-sky-500">
                            <span>Send Message</span>
                            <AiOutlineMessage size={22} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <p className="">{product.description}</p>
                        <div className="flex items-center gap-2">
                            <h5>{product.price}$</h5>
                            <small className="text-xs line-through text-red">
                                {product.discount_price}$
                            </small>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="text-white bg-green-500 btn btn-square">
                                <MdOutlineAdd size={20} />
                            </button>
                            <span className="w-[48px] h-[48px] rounded-md flex justify-center items-center text-white bg-green-500 font-bold">
                                {1}
                            </span>
                            <button className="text-white bg-green-500 btn btn-square">
                                <MdRemove size={20} />
                            </button>
                        </div>
                        <button className="text-white bg-green-500 btn w-max">
                            <span>Add to cart</span>
                            <FaCartPlus size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsDetailsPage;
