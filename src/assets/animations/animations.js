export const cartAnimation = {
    hidden: {
        x: "100%",
        opacity: 0.7,
    },
    visible: {
        x: "0%",
        opacity: 1,
        transition: {
            duration: 0.4,
            type: "spring",
            damping: 25,
            stiffness: 200,
        },
    },
    exit: {
        x: "100%",
        opacity: 0,
    },
};
