import React, { useState } from "react";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { createShopSchema } from "../../schemas";
import { axiosInstance } from "../../../axiosConfig";
import FormLayout from "../../components/layouts/FormLayout";

const CreateShop = () => {
    const [viewPassword, setViewPassword] = useState(false);
    const [preview, setPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createShop = async (values, actions) => {
        try {
            setIsLoading(true);
            const response = await axiosInstance("/auth/signup", {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                method: "POST",
                data: values,
            });

            // actions.resetForm();
        } catch (error) {
            console.log("error");
        } finally {
            // actions.resetForm();
            setIsLoading(false);
        }
    };

    const initialValues = {
        shopname: "",
        phoneNumber: "",
        email: "",
        address: "",
        pincode: "",
        password: "",
        logo: null,
    };
    return (
        <FormLayout>
            <div className="flex flex-col justify-center w-full h-full gap-4 p-6 font-semibold bg-white rounded-none shadow-sm sm:h-max sm:max-w-md sm:mx-auto sm:gap-8 sm:p-12 sm:rounded-lg">
                <h1 className="auth-heading">Register as a Seller</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={createShopSchema}
                    validateOnMount
                    onSubmit={createShop}
                >
                    {({ errors, touched, isSubmitting, values, setFieldValue }) => (
                        <Form className="flex flex-col gap-4">
                            {console.log(values.profile_pic, "pic")}
                            <div className="relative">
                                <label
                                    className="text-purple-700"
                                    htmlFor="shopname"
                                >
                                    Shop Name
                                </label>
                                <Field
                                    type="text"
                                    placeholder="Enter shopname"
                                    className="auth-input"
                                    name="shopname"
                                />
                                {errors.shopname && touched.shopname && (
                                    <p className="error-message">{errors.shopname}</p>
                                )}
                            </div>

                            <div className="relative">
                                <label
                                    className="text-purple-700"
                                    htmlFor="phoneNumber"
                                >
                                    Phone Number
                                </label>
                                <Field
                                    type="text"
                                    placeholder="Enter phone number"
                                    className="auth-input"
                                    name="phoneNumber"
                                />
                                {errors.phoneNumber && touched.phoneNumber && (
                                    <p className="error-message">{errors.phoneNumber}</p>
                                )}
                            </div>
                            <div>
                                <label
                                    className="text-purple-700"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <Field
                                        type={viewPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="auth-input"
                                        name="password"
                                    />
                                    {errors.password && touched.password && (
                                        <p className="error-message">{errors.password}</p>
                                    )}
                                    <div className="absolute right-2 top-[50%] translate-y-[-50%] h-full flex justify-center items-center">
                                        {viewPassword ? (
                                            <button
                                                onClick={() => setViewPassword((prev) => !prev)}
                                            >
                                                <AiFillEye size={20} />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => setViewPassword((prev) => !prev)}
                                            >
                                                <AiFillEyeInvisible size={20} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    className="text-purple-700"
                                    htmlFor="email"
                                >
                                    Profile picture
                                </label>
                                <div className="flex flex-row-reverse items-center border-purple-800 border-solid border-1">
                                    <div className="border-[1px] border-l-0 border-solid border-purple-800 ">
                                        {values?.profile_pic ? (
                                            <img
                                                src={preview}
                                                alt="profile"
                                                className="w-[45px] h-[46px] object-cover"
                                            />
                                        ) : (
                                            <BsFillPersonFill size={46} />
                                        )}
                                    </div>
                                    <input
                                        onChange={(e) => {
                                            setFieldValue("profile_pic", e.target.files[0]);
                                            setPreview(URL.createObjectURL(e.target.files[0]));
                                        }}
                                        name="profile_pic"
                                        type="file"
                                        accept="image/*"
                                        className="file-input cursor-pointer h-[unset] focus:outline-none file-input-primary w-full outline-none rounded-none"
                                    />
                                </div>
                            </div>
                            <button
                                disabled={isSubmitting || Object.keys(errors).length > 0}
                                type="submit"
                                className={`btn-primary ${
                                    isSubmitting ||
                                    (Object.keys(errors).length > 0 && "not-allowed")
                                }`}
                            >
                                Signup
                            </button>
                            <p className="mt-6">
                                Already have an account?{" "}
                                <Link
                                    to="/auth/login"
                                    className="text-purple-700"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </FormLayout>
    );
};

export default CreateShop;
