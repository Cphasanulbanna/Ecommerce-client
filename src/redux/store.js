import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import userDataReducer from "./reducers/userDataSlice";
import sellerDataReducer from "./reducers/sellerDataSlice";

const store = configureStore({
    reducer: {
        userdata: userDataReducer,
        sellerdata: sellerDataReducer,
    },
    middleware: [thunk],
});

export default store;
