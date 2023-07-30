import React from "react";

import AppRouter from "./components/router/AppRouter";
import useFetchData from "./hooks/useFetchData";

function App() {
    useFetchData();
    return <AppRouter />;
}

export default App;
