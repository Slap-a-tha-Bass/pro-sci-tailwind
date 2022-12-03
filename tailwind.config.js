/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        white: "0 0 10px rgb(255, 255, 255)",
        whitelg: "0 0 20px rgb(255, 255, 255)",
      },
      dropShadow: {
        white: "0 0 15px rgba(240, 240, 240, 0.7)",
      },
      fontFamily: {
        header: ["Papyrus", "sans-serif"],
      },
    },
  },
  plugins: [],
};
