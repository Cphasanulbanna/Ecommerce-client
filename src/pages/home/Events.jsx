import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

const Events = ({ inPage }) => {
    return (
        <section className={`${inPage ? "py-0" : "py-8 lg:py-16"}  bg-violet-100`}>
            <div className="flex items-center justify-between p-12 overflow-hidden bg-white rounded-md shadow-md wrapper">
                <div className="w-1/2">
                    <img
                        src="https://images.tcdn.com.br/img/img_prod/893885/apple_iphone_14_128gb_roxo_6_1_12mp_ios_5g_com_carregador_25w_usb_c_power_adapter_usb_c_to_lightning_4147_1_c12ded022c2bbef33929495ce0bcec61.jpg"
                        alt="product"
                        className="object-center object-cotain"
                    />
                </div>
                <div className="flex flex-col w-1/2 gap-3">
                    <h2 className="text-3xl font-bold">product name</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex quia
                        facilis repellendus expedita eum natus rem placeat animi explicabo, ratione
                        illo cum, adipisci recusandae. Ea corporis, ipsam natus quaerat vitae
                        quibusdam asperiores consectetur modi enim iste sequi assumenda qui esse hic
                        ut deleniti officiis vel aperiam recusandae alias delectus sed dolores
                        ratione. Possimus quisquam alias, ipsum quod omnis ut!
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <small className="text-sm line-through text-red">2000</small>
                            <h3 className="inline-block font-bold">1000$</h3>
                        </div>
                        <span className="font-bold green-500 text-sky-600">120 sold</span>
                    </div>
                    <p className="text-lg text-red">Time's up!</p>
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-normal text-white btn bg-violet-900 hover:bg-purple-800">
                            See Details
                        </button>
                        <button className="text-sm font-normal text-white btn bg-violet-900 hover:bg-purple-800">
                            Buy Now
                        </button>
                    </div>
                    <button className="flex items-center justify-end w-full gap-2 text-right text-sky-700 hover:text-sky-500">
                        See more offers <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;
