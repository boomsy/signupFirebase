/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.js", 
    "./App.js{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

