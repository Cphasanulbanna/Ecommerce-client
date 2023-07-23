import React, { useEffect, useState } from "react";

import { productData } from "../static/data";
import ProductCard from "./product/ProductCard";

import { motion } from "framer-motion";

const BestSellingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = productData && productData.sort((a, b) => a.total_sell - b.total_sell);
        setProducts(products);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="py-16 bg-violet-100"
        >
            <div className="grid grid-cols-1 gap-5 wrapper sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7">
                {products?.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </motion.div>
    );
};

export default BestSellingPage;
