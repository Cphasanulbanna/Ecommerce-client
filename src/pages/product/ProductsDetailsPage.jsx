import React, { useEffect, useState } from "react";

import { productData } from "../../static/data";

import { AiOutlineMessage } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";

import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductsDetailsPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        const product = productData?.find((product) => product.id == id);
        setProduct(product);
    }, [id]);

    const [selectedImage, setSelectedImage] = useState(0);
    const [activeSection, setActiveSection] = useState("PRODUCT_DETAILS");

    const navigate = useNavigate();

    const sendMessage = () => {
        navigate("/inbox?conversation=505se5d1ee44d4");
    };

    const MoreDetails = ({ product }) => {
        return (
            <div className="wrapper rounded-sm bg-slate-50  min-h-[40vh] shadow-sm mb-10">
                <div className="flex items-center justify-between px-5 pt-5 pb-2 border-b-[1px]  border-solid border-slate-200">
                    <h5
                        onClick={() => setActiveSection("PRODUCT_DETAILS")}
                        className={`${
                            activeSection === "PRODUCT_DETAILS"
                                ? "border-solid border-b-2 border-deep-blue"
                                : "border-solid border-b-2 border-slate-50"
                        } text-xl font-bold text-black cursor-pointer`}
                    >
                        Product Details
                    </h5>
                    <h5
                        className={`${
                            activeSection === "PRODUCT_REVIEWS"
                                ? "border-solid border-b-2 border-deep-blue"
                                : "border-solid border-b-2 border-slate-50"
                        } text-xl font-bold text-black cursor-pointer`}
                        onClick={() => setActiveSection("PRODUCT_REVIEWS")}
                    >
                        Product Reviews
                    </h5>
                    <h5
                        className={`${
                            activeSection === "SELLER_INFORMATION"
                                ? "border-solid border-b-2 border-deep-blue"
                                : "border-solid border-b-2 border-slate-50"
                        } text-xl font-bold text-black cursor-pointer`}
                        onClick={() => setActiveSection("SELLER_INFORMATION")}
                    >
                        Seller Information
                    </h5>
                </div>

                <div className="p-5">
                    {activeSection === "PRODUCT_DETAILS" ? (
                        <div className="flex flex-col gap-6">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                                blanditiis assumenda laudantium provident odit sed eius fugit error
                                earum quam quae veritatis, adipisci similique amet nisi consequatur
                                delectus dolorum ut sunt accusantium ipsum reprehenderit. Aut vel
                                ipsa, excepturi, quaerat vitae quia hic quos sit maxime nostrum
                                dignissimos, amet fugit. Quis!
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
                                perferendis omnis ratione repellendus, ipsa aliquam iusto incidunt
                                quasi aspernatur molestiae, sed doloribus error magni. Eaque
                                blanditiis nemo deserunt expedita eligendi eveniet inventore quam
                                earum quo, doloribus obcaecati exercitationem, eos possimus minima
                                impedit nihil totam delectus ex, laborum corporis culpa assumenda
                                cumque praesentium accusantium. Fugiat ea, ab magnam magni eum
                                blanditiis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
                                velit ipsum eligendi optio ea fugiat expedita dolores illo quam quo,
                                exercitationem placeat, delectus dignissimos rerum!
                            </p>
                        </div>
                    ) : activeSection === "PRODUCT_REVIEWS" ? (
                        <div className="flex items-center justify-center">
                            <p>No reviews</p>
                        </div>
                    ) : activeSection === "SELLER_INFORMATION" ? (
                        <div className="flex justify-between gap-4">
                            <div className="w-[65%] flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-[40px] h-[40px] cursor-pointer rounded-full overflow-hidden">
                                        <img
                                            src={product?.shop?.shop_avatar.url}
                                            alt="brand"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p>{product?.shop.name}</p>
                                        <p>({product?.rating}) Rating</p>
                                    </div>
                                </div>
                                <p className="w-[80%]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                                    omnis laboriosam sunt exercitationem quisquam, vel earum
                                    repudiandae et velit suscipit tenetur at qui voluptate repellat
                                    molestiae dolores totam consectetur expedita?
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Joined on: 14 june, 2023</p>
                                <p>Total Products: 500</p>
                                <p>Total Reviews: 320</p>
                                <Link
                                    to="/"
                                    className="flex items-center justify-center px-6 btn-main"
                                >
                                    Visit Shop
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="py-1"
        >
            <div className="sm:wrapper">
                <div className="flex flex-col justify-between gap-5 p-4 bg-white rounded-md sm:p-10 md:flex-row">
                    <div className="md:w-[5%] min-w-[60px] flex flex-row md:flex-col h-full py-1 overflow-x-auto md:overflow-x-hidden overflow-y-hidden md:overflow-y-auto">
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
                <MoreDetails product={product} />
            </div>
        </motion.div>
    );
};

export default ProductsDetailsPage;
