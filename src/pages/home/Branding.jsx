import React from "react";

import { brandingData } from "../../static/data";

const Branding = () => {
    return (
        <div className="sm:py-[50px] py-[40px] bg-violet-100">
            <div className="flex items-center justify-between p-6 bg-white rounded-md shadow-md wrapper">
                {brandingData &&
                    brandingData?.map((data) => (
                        <div
                            key={data.id}
                            className="flex items-center gap-4"
                        >
                            <div className="mb-3">{data.icon}</div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-semibold">{data.title}</h3>
                                <p>{data.Description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Branding;
