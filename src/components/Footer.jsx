import React from "react";
import { Link } from "react-scroll";

import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-deep-blue">
            <div className="grid grid-cols-2 gap-3 py-8 lg:grid-cols-4 wrapper lg:py-16 text-slate-500">
                <div className="flex flex-col gap-4">
                    <Link
                        to="home"
                        smooth={true}
                        spy={true}
                    >
                        <PiShoppingCartSimpleFill
                            className="text-slate-300"
                            size={50}
                        />
                    </Link>
                    <p>All your needs in one place!</p>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <a
                            className="hover:text-slate-200"
                            href="#"
                        >
                            <FaFacebookSquare className="text-xl sm:text-2xl lg:text-3xl" />
                        </a>
                        <a
                            className="hover:text-slate-200"
                            href="#"
                        >
                            <AiFillTwitterCircle className="text-xl sm:text-2xl lg:text-3xl" />
                        </a>
                        <a
                            className="hover:text-slate-200"
                            href="#"
                        >
                            <AiFillYoutube className="text-xl sm:text-2xl lg:text-3xl" />
                        </a>
                        <a
                            className="hover:text-slate-200"
                            href="#"
                        >
                            <AiFillInstagram className="text-xl sm:text-2xl lg:text-3xl" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h6 className="font-bold text-slate-300">Company</h6>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        About
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Careers
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Blogs
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Locations
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Revies
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <h6 className="font-bold text-slate-300">Shop</h6>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Game & Video
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Phone & Tablets
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Computers & Laptop
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Watches
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Events
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <h6 className="font-bold text-slate-300">Support</h6>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        FAQ
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Reviews
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Contact US
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Shipping
                    </a>
                    <a
                        href=""
                        className="text-[12px] transition duration-200 hover:text-slate-200 hover:underline sm:text-sm lg:text-base"
                    >
                        Chat with us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
