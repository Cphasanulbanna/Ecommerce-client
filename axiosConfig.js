import axios from "axios";

//DEMO
export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/",
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            let userdata = JSON.parse(localStorage.getItem("user_data"));

            const response = await axiosInstance.get("/auth/refresh-token");

            if (userdata) {
                userdata.access_token = response.data.access_token;
                localStorage.setItem("user_data", JSON.stringify(userdata));
                window.location.reload();
            }
        }
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.request.use(
    (request) => {
        const userData = JSON.parse(localStorage.getItem("user_data"));
        const sellerData = JSON.parse(localStorage.getItem("seller_data"));

        const accessToken = userData?.access_token;
        const bearerToken = `Bearer ${accessToken}`;

        const sellerAccessToken = sellerData?.seller_access_token;
        const sellerBearerToken = `Bearer ${sellerAccessToken}`;

        if (accessToken) {
            request.headers.authorization = bearerToken;
            request.withCredentials = true;
        }

        if (sellerAccessToken) {
            if (request.url.startsWith("/shop")) {
                request.headers.authorization = sellerBearerToken;
                request.withCredentials = true;
            }
        }
        return request;
    },
    (error) => error
);
