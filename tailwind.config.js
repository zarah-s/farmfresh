/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      "primary": "#398796",
      "primary-transparent": "#39889769"

    },

  },
  plugins: [],
}