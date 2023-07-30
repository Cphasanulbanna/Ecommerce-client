import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/reducers/userDataSlice";

const useFetchData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
};

export default useFetchData;
