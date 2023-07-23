import React from "react";

import { BiUser } from "react-icons/bi";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { RiRefundFill } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const options = [
    { id: 1, name: "Profile", icon: <BiUser size={20} /> },
    { id: 2, name: "Orders", icon: <BiSolidShoppingBagAlt size={20} /> },
    { id: 3, name: "Track Order", icon: <IoIosList size={20} /> },
    { id: 4, name: "Refund", icon: <RiRefundFill size={20} /> },
    { id: 5, name: "Payment Methods", icon: <MdPayment size={20} /> },
    { id: 6, name: "Address", icon: <FaRegAddressCard size={20} /> },
    { id: 7, name: "Inbox", icon: <BsChatLeftDotsFill size={20} /> },
    { id: 8, name: "Logout", icon: <BiLogOut size={20} /> },
];

const ProfileSidebar = ({ active, setActive }) => {
    return (
        <div className="flex flex-col gap-6 p-5 bg-white rounded-sm shadow-sm w-[300px] h-full justify-between">
            {options?.map((option, index) => (
                <div
                    onClick={() => setActive(option.id)}
                    key={index}
                    className={`flex items-center gap-2 cursor-pointer ${
                        active === option.id ? "text-red" : ""
                    }`}
                >
                    {option?.icon}
                    <h3>{option.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default ProfileSidebar;
