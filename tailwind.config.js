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
        '2.5': '0.625rem',
        '7': '1.75rem',
      },
      fontSize: {
        '1.5xl': '1.4rem',
        '2.4xl': '1.6rem',
        '2.5xl': '1.75rem',
        '3.5xl': '2.25rem',
        '4.25xl': '2.5rem',
        '4.5xl': '2.75rem',
      },
      lineHeight: {
        'less-than-loose': '1.15',
      },
      borderRadius: {
        'sm-md': '0.2rem',
      },
      padding: {
        '2.5': '0.65rem',
        '3': '0.75rem',
        '7': '1.75rem',
      },
      margin: {
        '1.5': '0.375rem',
        '4.5': '1.15rem',
        '9': '2.25rem',
      },
      width: {
        '18': '4.5rem',
        '60': '15rem',
      },
      height: {
        '13': '3.25rem',
      },
      maxWidth: {
        '94': '23.5rem',
      },
      boxShadow: {
        'large-light': '0 0 60px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

