/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.hbs"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": "url('/images/img9.jpg')",
      },
      colors: {
        "custom-color-1": "#0d1b2a",
        "custom-color-2": "#303942",
      },
    },
  },
  plugins: [],
};
