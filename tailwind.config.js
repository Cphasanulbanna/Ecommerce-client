/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                blue: "#2CBCE9",
                red: "#DC4492",
                yellow: "#FDCC49",
                grey: "#EDEDED",
                "deep-blue": "#010026",
                "dark-grey": "#757575",
                "light-black": "rgba(0,0,0,0.35)",
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                opensans: ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
