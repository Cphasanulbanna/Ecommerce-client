export const isAuth = () => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const accessToken = userData?.access_token;
    return accessToken ? true : false;
};

export const sellerAuth = () => {
    const sellerData = JSON.parse(localStorage.getItem("seller_data"));
    const accessToken = sellerData?.seller_access_token;
    return accessToken ? true : false;
};
