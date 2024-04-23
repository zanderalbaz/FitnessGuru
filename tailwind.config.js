/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define custom fonts
      fontFamily: {
    
      },
      // Define custom colors
      colors: {
  
      },
      // Define custom font sizes
      fontSize: {
        tiny: '0.694rem',
        small: '0.833rem',
        base: '16px', // Tailwind uses "base" for the default font size
        h6: '1.2rem',
        h5: '1.44rem',
        h4: '1.728rem',
        h3: '2.074rem',
        h2: '2.488rem',
        h1: '2.986rem',
      },
      // Define custom height
      height: {
        '385': '32rem',
      },
    },
  },
  plugins: [],
}

