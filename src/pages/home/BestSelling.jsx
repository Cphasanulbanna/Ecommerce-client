import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { EqualHeight, EqualHeightElement } from "react-equal-height";

import { productData } from "../../static/data";

import ProductCard from "../product/ProductCard";
// import useEqualHeight from "../../hooks/useEqualHeight";

const BestSelling = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sortedProducts =
            productData && productData.sort((a, b) => b.total_sell - a.total_sell).slice(0, 6);
        setProducts(sortedProducts);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section
            id="best-selling"
            className="section-style"
        >
            <div className="wrapper">
                <h1 className="mb-6 text-2xl font-bold">Best Deals</h1>
                <div className="">
                    <Slider {...settings}>
                        {products &&
                            products?.map((product) => (
                                <ProductCard
                                    key={product.name}
                                    product={product}
                                />
                            ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
