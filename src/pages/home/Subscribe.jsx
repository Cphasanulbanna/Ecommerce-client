import React from "react";

const Subscribe = () => {
    return (
        <div className="p-8 bg-teal-600">
            <div className="flex items-center justify-between text-white wrapper">
                <h2 className="text-3xl font-bold">
                    <span className="font-bold text-deep-blue">Subscribe</span> us for to get news{" "}
                    <br />
                    events and offers
                </h2>
                <form
                    className="flex items-center gap-4"
                    action=""
                >
                    <input
                        type="text"
                        placeholder="Type here"
                        className="w-full max-w-xs input input-bordered input-primary focus:outline-none text-deep-blue"
                    />
                    <button
                        type="submit"
                        className="btn btn-main"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
