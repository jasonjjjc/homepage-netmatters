/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'c-sm': '481px', // Custom breakpoint at 481 pixels
      },
    },
    
  },
  plugins: [],
}

