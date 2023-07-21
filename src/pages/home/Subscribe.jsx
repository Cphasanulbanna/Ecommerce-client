import React from "react";

const Subscribe = () => {
    return (
        <div className="bg-teal-600 md:p-8">
            <div className="flex flex-col justify-between gap-3 p-5 text-white sm:gap-5 md:items-center md:flex-row md:p-0 sm:wrapper">
                <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl md:w-[50%]">
                    <span className="font-bold text-deep-blue">Subscribe</span> us for to get news{" "}
                    <br className="hidden w-full lg:block " />
                    events and offers
                </h2>
                <form
                    className="flex flex-col items-center w-full gap-2 sm:flex-row lg:gap-4 lg:flex-row md:w-max"
                    action=""
                >
                    <input
                        type="text"
                        placeholder="Type here"
                        className="h-[40px] w-full rounded-sm md:max-w-xs input input-bordered input-primary focus:outline-none text-deep-blue"
                    />
                    <button
                        type="submit"
                        className="min-w-full btn rounded-sm btn-main sm:min-w-max max-h-[40px] h-[40px]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
