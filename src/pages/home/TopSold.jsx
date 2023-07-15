import React, { useEffect, useState } from "react";

import { productData } from "../../static/data";

import BestSellingProduct from "./BestSellingProduct";

const TopSold = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sortedProducts =
            productData && productData.sort((a, b) => b.total_sell - a.total_sell).slice(0, 5);
        setProducts(sortedProducts);
    }, []);
    return (
        <div className="bg-violet-100 py-8">
            <div className="wrapper">
                <h1 className="font-bold mb-6 text-2xl">Best Deals</h1>
                <div className="grid grid-cols-2 gap-3 sm:gap-3 md:gap-5 md:grid-cols-4 lg:grid-cols-5">
                    {products &&
                        products?.map((product) => <BestSellingProduct product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default TopSold;
