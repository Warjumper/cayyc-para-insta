/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'sea1': "url('../images/sea1.jpg')",
        'sea2': "url('../images/sea2.jpg')",
        'earth1': "url('../images/earth1.jpg')",
      },
    },
  },
  plugins: [],
}
