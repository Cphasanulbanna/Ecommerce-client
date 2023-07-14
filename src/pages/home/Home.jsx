import React from "react";

import Background from "../../assets/images/spotlight.png";
import { FaShopify } from "react-icons/fa";

const Home = () => {
    return (
        <section
            className="home bg-violet-100"
            id="home"
        >
            <section className="wrapper flex justify-between">
                <div className="flex flex-col justify-center gap-4 w-3/5">
                    <h1 className="text-5xl font-bold">
                        Best Collection For <br />
                        Home Decoration
                    </h1>
                    <p className="w-[75%] text-slate-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore
                        suscipit eos debitis consectetur iste minus? Nobis in dicta aut impedit,
                        laudantium fugiat esse quaerat. Et libero harum voluptate cupiditate!
                    </p>
                    <button className="btn bg-violet-900 hover:bg-purple-800 text-white w-max">
                        <span className="">Shop Now</span>
                        <FaShopify size={20} />
                    </button>
                </div>
                <div
                    style={{ backgroundImage: `url(${Background})` }}
                    className="w-2/5 h-full bg-no-repeat bg-cover"
                ></div>
            </section>
        </section>
    );
};

export default Home;