import React, { useEffect } from "react";

import AppRouter from "./components/router/AppRouter";
import store from "./redux/store";
import { loaduser } from "./redux/actions/user";

function App() {
    useEffect(() => {
        store.dispatch(loaduser());
    }, []);
    return <AppRouter />;
}

export default App;
