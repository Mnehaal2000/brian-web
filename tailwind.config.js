/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary":"#059C4B",
        "green-secondary":"#079B4C",
        "footer":"#E0E0CE"
      },
    },
  },
  
  plugins: [],
  important:true,
}