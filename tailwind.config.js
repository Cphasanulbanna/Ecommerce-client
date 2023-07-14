/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "980px",
            },
            backgroundImage: {
                spotlight: "url('/images/spotlight.webp')",
            },
            colors: {
                blue: "#2CBCE9",
                red: "#DC4492",
                yellow: "#FDCC49",
                grey: "#EDEDED",
                "deep-blue": "#010026",
                "dark-grey": "#757575",
                "light-black": "rgba(0,0,0,0.35)",
            },
            backgroundImage: (theme) => ({
                "gradient-rainbow":
                    "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07% )",
                "gradient-rainblue":
                    "linear-gradient(90.66deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73% )",
            }),
        },
    },
    plugins: [require("daisyui")],
};
