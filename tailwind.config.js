/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: { 
    //   colors: {
    //   blue: '#1976D2',
    //   red: '#f44336',
    //   yellow: '#f89c26',
    //   'yellow-light': 'rgba(249, 198, 79, 0.2)',
    //   green: '#4caf50',
    //   grey: '#e9e9e9',
    //   white: '#ffffff',
    //   black: '#020202',
    //   'black-light': 'rgba(163, 163, 163, 0.3)',
    //   'background-gray': '#e9e9e9',
    //   purple: '#800080',
    //   pink: '#ffc0cb',
    //   orange: '#ffa500',
    //   cyan: '#00ffff',
    //   magenta: '#ff00ff',
    //   lime: '#00ff00',
    //   teal: '#008080',
    //   brown: '#a52a2a',
    //   indigo: '#4b0082',
    //   amber: '#ffbf00',
    //   deepOrange: '#ff8c00',
    //   lightBlue: '#add8e6',
    //   deepPurple: '#673ab7',
    //   lightGreen: '#90ee90',
    //   deepTeal: '#008b8b',
    // }
  },
  },
  plugins: [
    require('tailwind-scrollbar-hide', '@tailwindcss/line-clamp'),
  ],
}