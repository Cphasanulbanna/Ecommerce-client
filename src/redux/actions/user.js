import { axiosInstance } from "../../../axiosConfig";

export const loaduser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest",
        });
        const { data } = await axiosInstance("/user");
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message,
        });
    }
};
