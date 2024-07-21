/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: '"Montserrat", sans-serif',
        secondaryFont: '"Karla", sans-serif',
        thirdFont: '"Shadows Into Light", cursive',
        fouthFont: '"Cinzel", serif',
        fifthFont: '"Jaro", sans-serif',
      },
      colors: {
        'black-dark': '#00000050',
        'black-more': '#212121',
        'dull-white': '#FFFFFFB3',
        'white-light': '#FFFFFF30',
        'white-medium': '#FFFFFF40',
        'neon-blue': '#2FB8FF',
      },
    },
    keyframes: {
      'open-menu': {
        '0%': { transform: 'scaleY(0)'},
        '50%': { transform: 'scaleY(0.8)'},
        '80%': { transform: 'scaleY(1)'},
        '100%': { transform: 'scaleY(1)'}
      }
    },
    animation: {
      'open-menu': 'open-menu 0.4s linear forwards',
    }
  },
  plugins: [],
}