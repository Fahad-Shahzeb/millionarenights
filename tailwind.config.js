/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        600: "600px",
        xs: "360px",
      },
    },
  },
  plugins: [],
};
