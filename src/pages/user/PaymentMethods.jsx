import React from "react";

import { AiFillDelete } from "react-icons/ai";

import visa from "../../assets/images/visa.png";

const PaymentMethods = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between gap-5 mb-4">
                <h2 className="text-2xl font-bold">Payment Methods</h2>
                <button className="text-white bg-black btn h-[40px] min-h-[40px] rounded-sm">
                    Add new
                </button>
            </div>
            <div className="flex flex-col gap-4 p-5 bg-white rounded-sm shadow-md">
                <div className="grid grid-cols-3 gap-4 ">
                    <div className="flex items-center gap-3">
                        <div className="w-[35px]">
                            <img
                                src={visa}
                                alt="payemnt-type"
                            />
                        </div>
                        <h3 className="font-bold">Hasanul banna</h3>
                    </div>
                    <div className="justify-center">
                        <h3 className="font-bold">1234 **** **** **** 08/2022</h3>
                    </div>
                    <div className="flex justify-end">
                        <AiFillDelete
                            size={22}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;
