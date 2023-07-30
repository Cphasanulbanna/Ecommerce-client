import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const { sellerdata } = useSelector((state) => state.sellerdata);
    console.log(sellerdata, "data");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialState = {
        images: [],
        name: "",
        description: "",
        category: "",
        tags: "",
        originalPrice: "",
        discountPrice: "",
        stock: "",
    };

    return <div>CreateProduct</div>;
};

export default CreateProduct;
