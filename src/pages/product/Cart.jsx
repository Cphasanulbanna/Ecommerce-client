import React, { useState } from "react";

import { BsFillCartCheckFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { MdRemoveCircle } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import Overlay from "../../components/layouts/Overlay";

const Cart = ({ closeCart, openCart }) => {
    const [cart] = useState([
        { id: 1, name: "Product 1", quantity: 1, price: 100 },
        { id: 2, name: "Product 2", quantity: 2, price: 150 },
        { id: 3, name: "Product 3", quantity: 1, price: 200 },
    ]);

    return (
        <Overlay onClick={closeCart}>
            <div
                style={{
                    right: openCart ? "0" : "-380px",
                    transition: "all 0.5s ease",
                }}
                onClick={(e) => e.stopPropagation()}
                className="inset-0 w-full h-full bg-white sm:max-w-sm sm:absolute sm:right-0 sm:left-[unset]"
            >
                <div className="relative h-full py-5 text-black">
                    <div className="flex items-center gap-3 px-5 mb-10">
                        <BsFillCartCheckFill size={25} />
                        <h2 className="font-bold">3 items</h2>
                    </div>
                    <div className="flex flex-col">
                        {cart?.map((product) => (
                            <div
                                key={product.id}
                                className="flex justify-between gap-3 border-b-[1px] border-b-slate-200 py-2 px-5 shadow-sm first:border-t-[1px]"
                            >
                                <div className="flex flex-col items-center justify-between">
                                    <MdAddCircle
                                        className="cursor-pointer"
                                        size={22}
                                    ></MdAddCircle>

                                    <span className="font-bold text-md">1</span>

                                    <MdRemoveCircle
                                        className="cursor-pointer"
                                        size={22}
                                    ></MdRemoveCircle>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-[80px] h-[80px]">
                                        <img
                                            src="https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png"
                                            alt="product"
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base font-bold">{product.name}</h3>
                                        <p className="text-sm text-deep-blue">
                                            ${product.price} * {product.quantity}
                                        </p>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="fixed bottom-0 left-0 z-50 w-full text-white bg-green-400 rounded-none sm:absolute btn">
                        Checkout Now ($1080)
                    </button>

                    <AiFillCloseCircle
                        onClick={closeCart}
                        size={22}
                        className="absolute z-10 cursor-pointer right-2 top-2"
                    ></AiFillCloseCircle>
                </div>
            </div>
        </Overlay>
    );
};

export default Cart;
