/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Comic Sans MS"', 'cursive'],
        luckiestGuy: ['"Luckiest Guy"', 'cursive'],
        angkor: ['"Angkor"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive'],
      },
       colors: {
        customBlue: '#0984E3',
        customRed: '#F87274',
        customPink: '#CA4978',
      },
    },
  },
  plugins: [],
}

