import React, { useEffect, useState } from "react";

import { productData } from "../../static/data";

import ProductCard from "../product/ProductCard";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sortedProducts =
            productData && productData.sort((a, b) => b.total_sell - a.total_sell).slice(0, 5);
        setProducts(sortedProducts);
    }, []);
    return (
        <div className="py-8 lg:py-16 bg-violet-100">
            <div className="wrapper">
                <h1 className="mb-6 text-2xl font-bold">Featured Products</h1>
                <div className="grid grid-cols-2 gap-3 sm:gap-3 md:gap-5 md:grid-cols-4 lg:grid-cols-5">
                    {products &&
                        products?.map((product) => (
                            <ProductCard
                                key={product.name}
                                product={product}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
