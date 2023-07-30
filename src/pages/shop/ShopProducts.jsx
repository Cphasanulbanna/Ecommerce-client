import React from "react";

import { productData } from "../../static/data";
import ProductCard from "../product/ProductCard";

const ShopProducts = () => {
    console.log(productData.length, "total");
    return (
        <div className="px-8 py-10">
            <div className="products-grid">
                {productData?.map((product) => (
                    <ProductCard
                        key={product?.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopProducts;
