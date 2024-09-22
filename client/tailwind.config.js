/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        solid: "20px 20px 0 0 rgb(0 0 0)",
      },
    },
  },
  plugins: [],
};
