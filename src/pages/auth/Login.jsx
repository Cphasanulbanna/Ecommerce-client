import React, { useState } from "react";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Login = () => {
    const login = async (e) => {
        e.preventDefault();
    };

    const [viewPassword, setViewPassword] = useState(false);
    return (
        <div className="w-full h-full sm:h-max sm:max-w-md sm:mx-auto rounded-none justify-center gap-4 flex flex-col sm:gap-8 bg-white p-6 sm:p-12 sm:rounded-lg shadow-sm font-semibold">
            <h1 className="auth-heading">Login to your account</h1>
            <form
                onSubmit={login}
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
                    <div className="relative">
                        <input
                            type={viewPassword ? "text" : "password"}
                            placeholder="Enter password"
                            className="auth-input"
                        />
                        <div className="absolute right-2 top-[50%] translate-y-[-50%] h-full flex justify-center items-center">
                            {viewPassword ? (
                                <button onClick={() => setViewPassword((prev) => !prev)}>
                                    <AiFillEye size={20} />
                                </button>
                            ) : (
                                <button onClick={() => setViewPassword((prev) => !prev)}>
                                    <AiFillEyeInvisible size={20} />
                                </button>
                            )}
                        </div>
                    </div>
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

export default Login;
