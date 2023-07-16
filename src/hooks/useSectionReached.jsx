import { useState, useEffect } from "react";

function useSectionReached() {
    const [currentSectionId, setCurrentSectionId] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section, header"); // Assuming you have multiple sections
            let currentId = "";
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const isSectionInView = rect.top <= window.innerHeight && rect.bottom >= 0;
                if (isSectionInView) {
                    currentId = section.id;
                }
            });
            setCurrentSectionId(currentId);
        };

        handleScroll(); // Call it initially to set the section ID

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return currentSectionId;
}

export default useSectionReached;
