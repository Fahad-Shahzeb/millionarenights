/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        600: "600px",
        xs: "360px",
        xs1: "361px",
        lg2: "1140px",
        lg3: "1440px",
        "3xl": "1920px",
      },
      fontFamily: {
        SonyGothic: ["SonyGothic", ...defaultTheme.fontFamily.sans],
        sans: ["SonyGothic", ...defaultTheme.fontFamily.sans],
      },
      colors: {},
      backgroundImage: {
        colorGradiant: "linear-gradient(to bottom right, #C85EF7, #775Cf4)",
        colorGradiantFocused: "linear-gradient(to bottom right, #775CF4, #C85EF7,)",
      },
    },
  },
  plugins: [],
};
