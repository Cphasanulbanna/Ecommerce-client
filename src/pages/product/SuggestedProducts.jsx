import React, { useEffect, useState } from "react";

import { productData } from "../../static/data";
import ProductCard from "./ProductCard";

const SuggestedProducts = ({ product }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = productData?.filter(
            (suggestedProduct) => suggestedProduct?.category === product?.category
        );
        setProducts(products);
    }, [product]);
    return (
        <section className="my-10 wrapper">
            <h1 className="mb-5 text-xl font-bold">Suggested Products</h1>
            <div className="products-grid ">
                {products &&
                    products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </section>
    );
};

export default SuggestedProducts;
