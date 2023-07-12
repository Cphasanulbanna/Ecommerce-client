import React, { useState } from "react";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
// import CustomInput from "../../components/custom-inputs/CustomInput";
import { Field, Form, Formik } from "formik";
const Login = () => {
    const [viewPassword, setViewPassword] = useState(false);

    const login = async (values, actions) => {
        await new Promise((ressolve) => setTimeout(ressolve, 1500));
        console.log(values, "values");
        actions.resetForm();
    };

    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: "",
    // });

    const initialValues = {
        email: "",
        password: "",
        remember: false,
    };

    // const handleDataChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    return (
        <div className="w-full h-full sm:h-max sm:max-w-md sm:mx-auto rounded-none justify-center gap-4 flex flex-col sm:gap-8 bg-white p-6 sm:p-12 sm:rounded-lg shadow-sm font-semibold">
            <h1 className="auth-heading">Login to your account</h1>
            <Formik
                onSubmit={login}
                initialValues={initialValues}
            >
                {({ errors, isSubmitting, ...props }) => (
                    <Form className="flex flex-col gap-4">
                        <div>
                            {console.log(props.values, "values")}
                            <label
                                className="text-purple-700"
                                htmlFor="email"
                            >
                                Email address
                            </label>
                            <Field
                                type="text"
                                placeholder="Enter email"
                                name="email"
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
                                <Field
                                    type={viewPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    name="password"
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
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Field
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    className="checkbox checkbox-primary rounded-sm"
                                />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link className="text-purple-700">Forgot your password?</Link>
                        </div>
                        <button
                            disabled={isSubmitting || Object.keys(errors).length > 0}
                            type="submit"
                            className="btn-primary disabled:cursor-not-allowed"
                        >
                            Login
                        </button>
                        <p className="mt-6">
                            Not have any account?
                            <Link
                                to="/auth/signup"
                                className="text-purple-700"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
