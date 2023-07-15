import React from "react";
import { categoriesData } from "../../static/data";

const Categories = () => {
    return (
        <div className="py-8 bg-violet-100">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-col-5 wrapper">
                {categoriesData &&
                    categoriesData.map((category) => (
                        <div
                            key={category.id}
                            className="flex items-center gap-4 cursor-pointer bg-white rounded-lg overflow-hidden p-2 sm:p-4 shadow-sm md:hover:scale-[1.02] transition duration-300"
                        >
                            <div className="w-[45px] h-[45px] sm:w-[85px] sm:h-[85px] object-cover">
                                <img
                                    src={category.image_Url}
                                    alt="category"
                                />
                            </div>
                            <h4 className="text-sm sm:text-base font-bold">{category.title}</h4>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Categories;
