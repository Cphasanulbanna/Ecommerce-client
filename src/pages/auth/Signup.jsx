import React from "react";

const Signup = () => {
    const signup = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="w-full h-full sm:h-max sm:max-w-md sm:mx-auto rounded-none justify-center gap-4 flex flex-col sm:gap-8 bg-white p-6 sm:p-12 sm:rounded-lg shadow-sm font-semibold">
            <h1 className="auth-heading">Signup to your account</h1>
            <form
                onSubmit={signup}
                className="flex flex-col gap-4"
            >
                <div>
                    <label
                        className="text-purple-700"
                        htmlFor="email"
                    >
                        Email address
                    </label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        className="auth-input"
                    />
                </div>

                <div>
                    <label
                        className="text-purple-700"
                        htmlFor="email"
                    >
                        Password
                    </label>
                    <input
                        type="text"
                        placeholder="Enter password"
                        className="auth-input"
                    />
                </div>
                <button
                    type="submmit"
                    className="btn-primary"
                >
                    block
                </button>
            </form>
        </div>
    );
};

export default Signup;
