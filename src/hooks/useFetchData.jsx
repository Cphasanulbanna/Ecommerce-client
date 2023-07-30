import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchUserData } from "../redux/reducers/userDataSlice";
import { fetchSellerData } from "../redux/reducers/sellerDataSlice";

const useFetchData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
        dispatch(fetchSellerData());
    }, [dispatch]);
};

export default useFetchData;
