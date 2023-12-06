/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        600: "600px",
        xs: "360px",
        lg2: "1140px",
        lg3: "1440px",
      },
      fontFamily: {
        SonyGothic: ["SonyGothic", ...defaultTheme.fontFamily.sans],
        sans: ["SonyGothic", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
