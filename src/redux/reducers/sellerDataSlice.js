import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../axiosConfig";

const sellerData = localStorage.getItem("seller_data")
    ? JSON.parse(localStorage.getItem("seller_data"))
    : null;

const initialState = {
    sellerdata: sellerData,
};

export const fetchSellerData = () => async (dispatch) => {
    try {
        const response = await axiosInstance("/shop/seller", {
            method: "GET",
        });
        dispatch(setSellerData(response?.data));
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};

export const sellerDataSlice = createSlice({
    name: "sellerdata",
    initialState,
    reducers: {
        setSellerData: (state, action) => {
            const updateSellerdata = { ...state.sellerdata, ...action.payload };
            state.sellerdata = updateSellerdata;
            localStorage.setItem("seller_data", JSON.stringify(updateSellerdata));
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSellerData, logout } = sellerDataSlice.actions;

export default sellerDataSlice.reducer;
