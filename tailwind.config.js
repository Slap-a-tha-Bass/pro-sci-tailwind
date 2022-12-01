/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        white: "0 0 10px rgb(255, 255, 255)",
        whitelg: "0 0 20px rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
