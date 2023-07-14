import { useEffect, useState } from "react";

const useScrollPosition = (position) => {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > position) {
                setMatch(true);
            } else {
                setMatch(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return match;
};

export default useScrollPosition;
