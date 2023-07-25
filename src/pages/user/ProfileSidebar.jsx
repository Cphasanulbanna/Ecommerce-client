import React from "react";

import { BiUser } from "react-icons/bi";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { RiRefundFill } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import { axiosInstance } from "../../../axiosConfig";

import { useNavigate } from "react-router-dom";

const options = [
    { id: 1, name: "Profile", icon: <BiUser size={25} /> },
    { id: 2, name: "Orders", icon: <BiSolidShoppingBagAlt size={25} /> },
    { id: 3, name: "Track Order", icon: <IoIosList size={25} /> },
    { id: 4, name: "Refund", icon: <RiRefundFill size={25} /> },
    { id: 5, name: "Payment Methods", icon: <MdPayment size={25} /> },
    { id: 6, name: "Address", icon: <FaRegAddressCard size={25} /> },
    { id: 7, name: "Inbox", icon: <BsChatLeftDotsFill size={25} /> },
    { id: 8, name: "Logout", icon: <BiLogOut size={25} /> },
];

const ProfileSidebar = ({ active, setActive }) => {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await axiosInstance("/auth/logout", {
                method: "GET",
            });
            console.log(response.data);
            if (response.data.success === true) {
                localStorage.clear();
                navigate("/auth/login");
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="flex flex-col gap-7 sticky top-[61px] sm:static p-4 md:p-5 shadow-none calc-height sm:h-max bg-violet-200 sm:bg-white rounded-sm sm:shadow-md w-max sm:w-[300px]">
            {options?.map((option, index) => (
                <div
                    onClick={() => {
                        setActive(option.id);
                        option?.name === "Logout" && logout();
                    }}
                    key={index}
                    className={`flex items-center gap-2 cursor-pointer ${
                        active === option.id ? "text-red" : ""
                    }`}
                >
                    {option?.icon}
                    <h3 className="hidden sm:block">{option.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default ProfileSidebar;
