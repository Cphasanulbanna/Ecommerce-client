import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { motion } from "framer-motion";

import { productData } from "../static/data";
import ProductCard from "./home/ProductCard";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");

    useEffect(() => {
        if (categoryData) {
            const products =
                productData && productData.filter((product) => product.category === categoryData);
            setProducts(products);
        } else {
            const products = productData && productData.sort((a, b) => a.total_sell - b.total_sell);
            setProducts(products);
        }
    }, [categoryData]);
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
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ProductsPage;
