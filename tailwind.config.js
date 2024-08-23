/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.hbs"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": "url('/images/img1.jpg')",
      },
    },
  },
  plugins: [],
};
