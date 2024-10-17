/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        header: "#3b2af3",
        primary: "#7367f0",
        secondary: "#5e50ee",
        background: "#FFF",
        gris: "#F6F6F6",
        hover: "#220ef7",
      },
    },
  },
  plugins: [],
};
