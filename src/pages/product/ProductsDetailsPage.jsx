import React, { useEffect, useState } from "react";

import { productData } from "../../static/data";

import { AiOutlineMessage } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";

import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetailsPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    console.log(id, "id");
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        const product = productData?.find((product) => product.id == id);
        setProduct(product);
    }, [id]);

    const [selectedImage, setSelectedImage] = useState(0);

    const navigate = useNavigate();

    const sendMessage = () => {
        navigate("/inbox?conversation=505se5d1ee44d4");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="py-16 sm:bg-slate-50"
        >
            <div className="sm:wrapper">
                <div className="flex flex-col justify-between gap-5 p-4 bg-white rounded-md sm:shadow-md sm:p-10 md:flex-row">
                    <div className="w-[5%] min-w-[60px] flex flex-col h-full py-1 overflow-x-hidden overflow-y-auto">
                        {product?.image_Url?.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`${
                                    selectedImage === index
                                        ? " border-solid border-violet-800 border-[2px]"
                                        : ""
                                } w-[60px] h-[60px] cursor-pointer border-solid border-slate-200 border-[1px]`}
                            >
                                <img
                                    src={image.url}
                                    alt="product-image"
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-[45%] xl:w-[35%]">
                        <div className="p-3 border-slate-100 border-solid border-[1px]">
                            <div>
                                <img
                                    src={product?.image_Url[selectedImage]?.url}
                                    alt="product"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-between sm:gap-2 md:flex-col lg:flex-row sm:static">
                            <button className="text-white bg-[#fb641b] btn min-h-[40px] h-[40px] w-1/2 border-none rounded-none md:w-full lg:w-[48%] sm:w-[48%]">
                                <span>Add to cart</span>
                                <FaCartPlus size={16} />
                            </button>
                            <button className="text-white bg-[#ff9f0e] btn min-h-[40px] h-[40px] w-1/2 border-none rounded-none md:w-full lg:w-[48%] sm:w-[48%]">
                                <span>Buy now</span>
                                <IoMdFlash size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full md:w-[55%] xl:w-[60%]">
                        <h1 className="font-bold sm:text-2xl">{product?.name}</h1>
                        <p className="text-sm">{product?.description}</p>
                        <div className="border-slate-100 border-solid border-[1px] p-3 flex flex-col gap-2 sm:gap-3">
                            <div className="flex items-center gap-2">
                                <h5>{product?.price}$</h5>
                                <small className="line-through sm:text-xs text-red">
                                    {product?.discount_price}$
                                </small>
                            </div>

                            <span>Ratings ({product?.rating})</span>
                            <span>Sold {product?.total_sell}</span>
                            <span>Stock {product?.stock}</span>
                        </div>

                        <button className="text-white btn w-max bg-sky-500 min-h-[40px] h-[40px] rounded-none">
                            <span>Send Message</span>
                            <AiOutlineMessage size={22} />
                        </button>

                        <div className="flex items-center gap-2 border-slate-100 border-solid border-[1px] w-max p-3">
                            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                                <img
                                    src={product?.shop?.shop_avatar.url}
                                    alt="brand-image"
                                />
                            </div>
                            <p className="text-sky-500">{product?.shop.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductsDetailsPage;
