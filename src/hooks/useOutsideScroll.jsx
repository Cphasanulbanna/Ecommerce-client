import { useEffect } from "react";

const useOutsideScroll = (state) => {
    useEffect(() => {
        const body = document.body;
        if (state) {
            body.style.overflowY = "hidden";
            body.classList.add("remove-scrollbar");
        } else {
            body.style.overflowY = "scroll";
            body.classList.remove("remove-scrollbar");
        }
        return () => {
            body.style.overflowY = "scroll";
            body.classList.remove("remove-scrollbar");
        };
    }, [state]);
};
export default useOutsideScroll;
