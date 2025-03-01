/** 
 * 
 * @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 20s linear infinite',
        scrollRight: 'scrollRight 20s linear infinite',
        'spin-slow': 'spin 8s linear infinite', 
      },  
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a custom font
      },
      
    },
  },
  plugins: [],
};
