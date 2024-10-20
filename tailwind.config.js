/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js}', // Includes all JSX and JS files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc143c', // Neon Red
        secondary: '#FFFFFF', // White
        background: '#000000', // Deep Black
      },
    },
  },
  plugins: [],
};
