import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import StarRatings from "react-star-ratings";

const ProductCard = ({ product }) => {
    return (
        <div
            id="best-selling-product"
            key={product?.id}
            className="flex flex-col gap-3 p-3 overflow-hidden bg-white rounded-md shadow-md"
        >
            <div className="flex gap-3">
                <div className="w-5/6 aspect-square max-h-[120px]">
                    <img
                        src={product?.image_Url[0]?.url}
                        alt="product"
                        className="object-contain object-center"
                    />
                </div>
                <div className="flex flex-wrap justify-end w-1/6 gap-2 h-max">
                    <button>
                        <AiOutlineHeart
                            title="Add to wishlist"
                            size={22}
                        />
                    </button>
                    <button>
                        <AiOutlineShoppingCart
                            title="Add to cart"
                            size={22}
                        />
                    </button>
                    <button>
                        <AiOutlineEye
                            title="View product"
                            size={22}
                        />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 sm:gap-4">
                <h3 className="text-sky-700">{product?.shop?.name}</h3>
                <p className="line-clamp-2">{product?.name}</p>
                <StarRatings
                    rating={product?.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                    id="best-selling-product-rating"
                />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h5 className="relative font-bold">
                            {product?.price}$
                            <small className="absolute top-0 z-10 ml-1 line-through text-red">
                                {product?.discount_price}
                            </small>
                        </h5>
                    </div>
                    <p className="text-green-500">{product?.total_sell} sold</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;