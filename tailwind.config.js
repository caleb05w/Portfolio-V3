module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all React files are included
    "./public/index.html", // Include HTML files
  ],
  theme: {
    extend: {
      colors: {
        "my-purple": "#5d4ae1", // Custom purple color
        "my-gray": "#aaa8a8", // Custom gray color
        "my-black": "#000000", // Custom black color
      },
    },
  },
  plugins: [],
};
