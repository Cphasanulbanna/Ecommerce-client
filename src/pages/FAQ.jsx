import React, { useEffect, useState } from "react";

import { MdArrowForwardIos } from "react-icons/md";

const FAQ = () => {
    const [clickedId, setClickedId] = useState(null);

    const [faqs] = useState([
        {
            id: 1,
            question: "How do i track my order?",
            answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint earum similique itaque, distinctio dolores odio aliquam quo expedita modi eveniet possimus adipisci ex officiis! Obcaecati enim distinctio laborum ut.",
        },
        {
            id: 2,
            question: "What is your return policy?",
            answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint earum similique itaque",
        },
        {
            id: 3,
            question: "What is your return policy?",
            answer: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint earum similique itaque",
        },
    ]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <section className="h-full py-8 bg-violet-100 sm:py-16">
            <div className="wrapper">
                <h1 className="mb-8 font-bold sm:text-3xl">FAQ</h1>
                <div className="flex flex-col gap-6">
                    {faqs?.map((faq) => (
                        <div
                            onClick={() => setClickedId(clickedId !== faq.id ? faq.id : "")}
                            key={faq.id}
                            className={`transition-[max-height] duration-700 ease-in-out bg-white p-6 rounded-md overflow-hidden cursor-pointer ${
                                clickedId == faq.id ? "max-h-[250px] h-max" : "max-h-[70px]"
                            }`}
                        >
                            <div className={`pb-6 ${clickedId == faq.id ? "" : ""}`}>
                                <h3 className="relative">
                                    {faq.question}
                                    <button className="absolute z-10 top-[50%] right-2 translate-y-[-50%]">
                                        <MdArrowForwardIos
                                            size={22}
                                            className={`duration-700 ease-in-out ${
                                                clickedId == faq.id ? "rotate-90" : ""
                                            }`}
                                        />
                                    </button>
                                </h3>
                            </div>
                            <div>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
