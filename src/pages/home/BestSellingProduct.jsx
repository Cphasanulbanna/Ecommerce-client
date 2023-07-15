import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import StarRatings from "react-star-ratings";

const BestSellingProduct = ({ product }) => {
    return (
        <div
            key={product?.id}
            className="flex flex-col gap-3 p-3 rounded-md overflow-hidden shadow-md bg-white"
        >
            <div className="flex gap-3">
                <div className="w-5/6 aspect-square max-h-[120px]">
                    <img
                        src={product?.image_Url[0]?.url}
                        alt="product"
                        className="object-contain object-center"
                    />
                </div>
                <div className="w-1/6 flex justify-end flex-wrap gap-2 h-max">
                    <button>
                        <AiOutlineHeart size={22} />
                    </button>
                    <button>
                        <AiOutlineShoppingCart size={22} />
                    </button>
                    <button>
                        <AiOutlineEye size={22} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-sky-700">{product?.shop?.name}</h3>
                <p className="line-clamp-2">{product?.name}</p>
                <StarRatings
                    rating={product?.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                    starDimension={18}
                    starSpacing={2}
                />
            </div>
        </div>
    );
};

export default BestSellingProduct;
