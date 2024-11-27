module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all React files are included
    "./public/index.html", // Include HTML files
  ],
  theme: {
    extend: {
      colors: {
        "my-purple-light": "#BFB6FF", // Light purple
        "my-purple-dark": "#5d4ae1", // Dark purple
        "my-gray": "#aaa8a8", // Custom gray colory
        "my-black": "#000000", // Custom black color
      },
    },
  },
  plugins: [],
};
