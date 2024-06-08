/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#DB4444",
        accentDarker: "#BB4444",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
