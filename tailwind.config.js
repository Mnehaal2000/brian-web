/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green":"#059C4B",
        "footer":"#E0E0CE"
      },
    },
  },
  plugins: [],
}