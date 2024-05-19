/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2CCC77",
        hover: "#A1A1A1",
        text: "#ACACAC",
        sec: "#333333",
      },
    },
  },
  plugins: [],
};
