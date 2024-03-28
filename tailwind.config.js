const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardBG: "#1B1B1B",
        bgmain: "#272727",
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
