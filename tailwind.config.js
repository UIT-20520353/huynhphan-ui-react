/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#212529",
        },
        green: {
          1: "#046938",
          2: "#00341B",
          3: "#002A16",
        },
        red: {
          1: "#BE202E",
        },
        yellow: {
          1: "#FFF007",
        },
      },
      fontFamily: {
        "varela-round": ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
