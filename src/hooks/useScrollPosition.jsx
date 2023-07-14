import { useEffect, useState } from "react";

const useScrollPosition = (position) => {
    const [match, setMatch] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
            if (window.scrollY > position) {
                setMatch(true);
            } else {
                setMatch(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { match, scrollPos };
};

export default useScrollPosition;
