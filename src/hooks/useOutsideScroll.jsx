import { useEffect } from "react";

const useOutsideScroll = (state) => {
    useEffect(() => {
        const body = document.body;
        if (state) {
            body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "scroll";
        }
        return () => {
            body.style.overflowY = "scroll";
        };
    }, [state]);
};
export default useOutsideScroll;
