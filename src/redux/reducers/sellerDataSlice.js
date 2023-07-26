import { createSlice } from "@reduxjs/toolkit";

const sellerData = localStorage.getItem("seller_data")
    ? JSON.parse(localStorage.getItem("seller_data"))
    : null;

const initialState = {
    sellerdata: sellerData,
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
export const { setSellerData, logout, setActiveLink } = sellerDataSlice.actions;

export default sellerDataSlice.reducer;
