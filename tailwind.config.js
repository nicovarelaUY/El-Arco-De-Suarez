/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js',
],
  theme: {
    colors: {
    'celeste': '#02A9D9',
    'celeste_2': '#3792B5',
    'blanco': '#FFFFFF',
    'negro': '#000000',
  },
    extend: {},
  },
  plugins: [
    require('preline/plugin')
  ],
}

