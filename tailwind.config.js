/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#2F2F2F",
      }
    },
  },
  plugins: [],
};
