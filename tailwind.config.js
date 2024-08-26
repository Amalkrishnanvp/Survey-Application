/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.hbs"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": "url('/images/img9.jpg')",
      },
      colors: {
        "custom-color-1": "#0d1b2a",
        "custom-color-2": "#303942",
        "custom-color-3": "#d1d5db",
        "custom-color-4": "#9ca3af",
      },
      fontSize: {
        "custom-font-12": "12px",
      },
      borderWidth: {
        "custom-thin-1": "1px",
      },
      plugins: [require("@tailwindcss/forms")],
    },
  },
};
