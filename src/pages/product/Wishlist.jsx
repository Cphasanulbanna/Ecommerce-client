import React, { useState } from "react";

import { motion } from "framer-motion";

import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillBagHeartFill } from "react-icons/bs";

import Overlay from "../../components/general/Overlay";

import { cartAnimation } from "../../assets/animations/animations";

const Wishlist = ({ closeWishlist }) => {
    const [wishlist] = useState([
        { id: 1, name: "Product 1", quantity: 1, price: 100 },
        { id: 2, name: "Product 2", quantity: 2, price: 150 },
        { id: 3, name: "Product 3", quantity: 1, price: 200 },
    ]);

    return (
        <Overlay onClick={closeWishlist}>
            <motion.div
                style={{ right: 0, position: "absolute" }}
                onClick={(e) => e.stopPropagation()}
                variants={cartAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-full max-w-xs bg-white sm:max-w-sm"
            >
                <div className="relative h-full p-5 ">
                    <div className="flex items-center gap-3 mb-10">
                        <BsFillBagHeartFill size={25} />
                        <h2 className="font-bold">3 items</h2>
                    </div>
                    <div className="flex flex-col gap-8">
                        {wishlist?.map((product) => (
                            <div
                                key={product.id}
                                className="flex justify-between gap-6"
                            >
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <BsFillCartPlusFill
                                        className="cursor-pointer"
                                        size={30}
                                    ></BsFillCartPlusFill>
                                    <MdDelete
                                        className="cursor-pointer"
                                        size={30}
                                    ></MdDelete>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <h3 className="text-base font-bold">{product.name}</h3>
                                    <p className="text-sm text-deep-blue">
                                        ${product.price} * {product.quantity}
                                    </p>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="absolute bottom-0 left-0 flex items-center w-full text-white bg-green-400 rounded-none btn">
                        <BsFillCartPlusFill size={25} />
                        <span>Add all items to cart</span>
                    </button>

                    <AiFillCloseCircle
                        onClick={closeWishlist}
                        size={30}
                        className="absolute z-10 cursor-pointer right-2 top-2"
                    ></AiFillCloseCircle>
                </div>
            </motion.div>
        </Overlay>
    );
};

export default Wishlist;
