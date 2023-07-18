/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#1C1E53',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      width: {
        'container': '1280px',
      }
    },
  },
  plugins: [],
}
