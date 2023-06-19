/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#EF4C00",
        "custom-gray": "#314A67",
        "custom-red": "#B30733"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

