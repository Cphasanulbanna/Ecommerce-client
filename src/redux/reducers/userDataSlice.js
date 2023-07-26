import { createSlice } from "@reduxjs/toolkit";

const userData = localStorage.getItem("user_data")
    ? JSON.parse(localStorage.getItem("user_data"))
    : null;

const initialState = {
    userdata: userData,
};

export const userDataSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        setUserdata: (state, action) => {
            const updatedUserdata = { ...state.userdata, ...action.payload };
            state.userdata = updatedUserdata;
            localStorage.setItem("user_data", JSON.stringify(updatedUserdata));
        },
        logout: (state) => {
            state.userdata = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserdata, logout } = userDataSlice.actions;

export default userDataSlice.reducer;
