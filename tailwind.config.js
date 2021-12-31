module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './Components/**/*.{js,jsx}'],

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
