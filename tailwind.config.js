/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#212529",
        },
      },
      fontFamily: {
        "varela-round": ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
