/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "cb-primary": "#131E39",
      "cb-secondary": "#344A6A",
      "cb-contrast": "#162446",
      "cb-red": "#DD1650",
      "cb-base": "#F7F7F7",
      "cb-info": "#21ACBE",
      "cb-success": "#4CAF50",
      "cb-modal": "#162446",
      "cb-hover-signup": "#F10B4E",
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
