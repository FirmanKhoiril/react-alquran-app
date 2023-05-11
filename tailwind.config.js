/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Permanent Marker", "cursive"],
        primary: ["Open Sans", "sans-serif"],
      },
      textColor: {
        primary: "#fde68a",
      },
    },
  },
  plugins: [],
};
