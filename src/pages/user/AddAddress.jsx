import React from "react";

import { AiFillDelete } from "react-icons/ai";

const AddAddress = () => {
    console.log("add address");
    return (
        <div className="">
            <div className="flex items-center justify-between gap-5 mb-4">
                <h2 className="text-2xl font-bold">My Addresses</h2>
                <button className="text-white bg-black btn h-[40px] min-h-[40px] rounded-sm">
                    Add new
                </button>
            </div>
            <div className="flex flex-col gap-4 p-5 bg-white rounded-sm shadow-md">
                <div className="flex items-center justify-around gap-5">
                    <div className="flex items-center">
                        <h3 className="font-bold">Default</h3>
                    </div>
                    <div className="justify-center">
                        <h3 className="font-bold">440 Ootty road, place, India</h3>
                    </div>
                    <div className="justify-center">
                        <h3 className="font-bold">987 548 5487</h3>
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

export default AddAddress;
