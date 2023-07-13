import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./reducers/userDataSlice";

const store = configureStore({
    reducer: {
        userdata: userDataReducer,
    },
});

export default store;
