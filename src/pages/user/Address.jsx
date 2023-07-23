import React from "react";

import { Field, Formik, Form } from "formik";

import { TbPhotoEdit } from "react-icons/tb";

const Address = () => {
    const initialValues = {
        fullname: "",
        phoneNumber: "",
        email: "",
        pincode: "",
        address1: "",
        address2: "",
    };
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center">
                <div className="w-[150px] h-[150px] rounded-full border-[3px] border-solid border-red relative">
                    <div className="overflow-hidden rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            alt="profile"
                            className="object-contain"
                        />
                    </div>

                    <TbPhotoEdit
                        size={30}
                        className="absolute bottom-0 right-0 z-10 p-1 overflow-hidden rounded-full shadow-sm cursor-pointer bg-slate-200 text-violet-900"
                    />
                </div>
            </div>
            <Formik
                validateOnMount
                initialValues={initialValues}
            >
                {({ errors, isSubmitting, touched, ...props }) => (
                    <Form className="">
                        <div className="flex w-full gap-4">
                            <div className="flex flex-col gap-4 w-[50%]">
                                <div className="relative">
                                    <label
                                        className=""
                                        htmlFor="fullname"
                                    >
                                        Full Name
                                    </label>
                                    <Field
                                        type="text"
                                        placeholder="Enter fullname"
                                        name="fullname"
                                        className="profile-input"
                                        readOnly
                                    />
                                    {errors.fullname && touched.fullname && (
                                        <p className="error-message">{errors.fullname}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <label
                                        className=""
                                        htmlFor="email"
                                    >
                                        Email address
                                    </label>
                                    <Field
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        className="profile-input"
                                    />
                                    {errors.email && touched.email && (
                                        <p className="error-message">{errors.email}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <label
                                        className=""
                                        htmlFor="phoneNumber"
                                    >
                                        Phone Number
                                    </label>
                                    <Field
                                        type="text"
                                        placeholder="Enter phone number"
                                        name="phoneNumber"
                                        className="profile-input"
                                    />
                                    {errors.phoneNumber && touched.phoneNumber && (
                                        <p className="error-message">{errors.phoneNumber}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-[50%]">
                                <div className="relative">
                                    <label
                                        className=""
                                        htmlFor="email"
                                    >
                                        Pin code
                                    </label>
                                    <Field
                                        type="text"
                                        placeholder="Enter pin code"
                                        name="pincode"
                                        className="profile-input"
                                    />
                                    {errors.pincode && touched.pincode && (
                                        <p className="error-message">{errors.pincode}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <label
                                        className=""
                                        htmlFor="address1"
                                    >
                                        Address 1
                                    </label>
                                    <Field
                                        type="text"
                                        placeholder="Enter address"
                                        name="address1"
                                        className="w-full profile-input"
                                    />
                                    {errors.address1 && touched.address1 && (
                                        <p className="error-message">{errors.address1}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <label
                                        className=""
                                        htmlFor="address2"
                                    >
                                        Address 2
                                    </label>
                                    <Field
                                        type="text"
                                        placeholder="Enter address 2"
                                        name="address2"
                                        className="w-full profile-input"
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="mt-5 font-normal text-white rounded-sm btn w-max bg-violet-900">
                            Update
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Address;
