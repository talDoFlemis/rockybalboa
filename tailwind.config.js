/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#1d4ed8",
        accent: "#FFFF00",
        background: "#303446",
      },
      fontFamily: {
        dyna: ['var(--font-dyna)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
