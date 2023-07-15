import React, { useEffect, useState } from "react";

const useMediaQuery = () => {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(document.body.clientWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return screenSize;
};

export default useMediaQuery;
