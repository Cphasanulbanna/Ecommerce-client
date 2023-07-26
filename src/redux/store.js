import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./reducers/userDataSlice";
import sellerDataReducer from "./reducers/sellerDataSlice";

const store = configureStore({
    reducer: {
        userdata: userDataReducer,
        sellerdata: sellerDataReducer,
    },
});

export default store;
