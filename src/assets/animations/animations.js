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

export const textSlide = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
        viewport: {
            once: true,
            amount: 0.5,
        },
    },
};
