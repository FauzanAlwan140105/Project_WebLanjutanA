/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Only scan JS/TS files in src
    "./public/index.html" // Include your HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}