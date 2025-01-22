/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Comic Sans MS"', "cursive"],
        luckiestGuy: ['"Luckiest Guy"', "cursive"],
        angkor: ['"Angkor"', "serif"],
        inter: ['"Inter"', "sans-serif"],
        caveat: ['"Caveat"', "cursive"],
        pacifico: ['"Pacifico"', "cursive"],
      },
      colors: {
        customBlue: "#0984E3",
        customRed: "#F87274",
        customPink: "#CA4978",
      },
      screens: {
        xs: "380px",
        xl: "1290px",
      },
      animation: {
        "fade-in-up": "fade-in-up 1.2s ease-out",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};

