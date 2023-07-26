import React, { useState } from "react";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import { loginSchema } from "../../schemas";

import { axiosInstance } from "../../../axiosConfig";

import { useDispatch } from "react-redux";
import { setUserdata } from "../../redux/reducers/userDataSlice";
const Login = () => {
    const [viewPassword, setViewPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (values, actions) => {
        try {
            const resposne = await axiosInstance("/shop/login", {
                method: "POST",
                data: {
                    email: values.email,
                    password: values.password,
                },
            });

            if (resposne.data.success === true) {
                const { accessToken, email, fullname, id, profilePic, role } = resposne.data;
                dispatch(
                    setUserdata({
                        access_token: accessToken,
                        email,
                        fullname,
                        id,
                        profilePic,
                        role,
                    })
                );
                navigate("/");
                actions.resetForm();
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const initialValues = {
        email: "",
        password: "",
        remember: false,
    };

    return (
        <div className="flex flex-col justify-center w-full h-full gap-4 p-6 font-semibold bg-white rounded-none shadow-sm sm:h-max sm:max-w-md sm:mx-auto sm:gap-8 sm:p-12 sm:rounded-lg">
            <h1 className="auth-heading">Login to your account</h1>
            <Formik
                onSubmit={login}
                initialValues={initialValues}
                validationSchema={loginSchema}
                validateOnMount
            >
                {({ errors, isSubmitting, touched, ...props }) => (
                    <Form className="flex flex-col gap-4">
                        <div className="relative">
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
                            {errors.email && touched.email && (
                                <p className="error-message">{errors.email}</p>
                            )}
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
                                {errors.password && touched.password && (
                                    <p className="error-message">{errors.password}</p>
                                )}
                                <div className="absolute right-2 top-[50%] translate-y-[-50%] h-full flex justify-center items-center">
                                    {viewPassword ? (
                                        <span onClick={() => setViewPassword((prev) => !prev)}>
                                            <AiFillEye size={20} />
                                        </span>
                                    ) : (
                                        <span onClick={() => setViewPassword((prev) => !prev)}>
                                            <AiFillEyeInvisible size={20} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Field
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    className="rounded-sm checkbox checkbox-primary"
                                />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link className="text-purple-700">Forgot your password?</Link>
                        </div>
                        <button
                            disabled={isSubmitting || Object.keys(errors).length > 0}
                            type="submit"
                            className={`btn-primary ${
                                isSubmitting || (Object.keys(errors).length > 0 && "not-allowed")
                            }`}
                        >
                            Login
                        </button>
                        <p className="mt-6">
                            Not have any account?{" "}
                            <Link
                                to="/shop/create-shop"
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
