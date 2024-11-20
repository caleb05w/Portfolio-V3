const { Input } = require("postcss");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all React files are included
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
Input