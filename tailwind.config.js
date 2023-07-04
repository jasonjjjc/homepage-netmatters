/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'c-sm': '481px', // Custom breakpoint at 481 pixels
      },
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        '30': '7.5rem',
      },
      fontSize: {
        '4.5xl': '2.75rem',
        '2.5xl': '1.75rem',
      },
    },
  },
  plugins: [],
}

