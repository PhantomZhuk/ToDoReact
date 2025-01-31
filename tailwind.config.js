/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        }
      });
    }
  ],
}