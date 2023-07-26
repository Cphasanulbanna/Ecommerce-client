import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please enter a strong password" })
        .required("Paassword is required"),
});

export const signupSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please enter a strong password" })
        .required("Paassword is required"),
    fullname: yup.string().min(3).required("Fullname is required"),
});

export const createShopSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please enter a strong password" })
        .required("Paassword is required"),
    shopname: yup.string().min(3, "minimum 3 letter is required").required("Shop name is required"),
    phoneNumber: yup
        .number()
        .required("Phone number is required")
        .positive()
        .integer()
        .min(10, "minimum 10 digit is required"),
    pincode: yup
        .number()
        .required("Pincode is required")
        .positive()
        .integer()
        .min(6, "minimum 6 digit is required"),
    logo: yup.string().required("logo is required"),
    address: yup
        .string()
        .min(10, "minimum 10 char is required")
        .required("Shop address is required"),
});
