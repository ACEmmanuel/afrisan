/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "radio" : ["Radio Canada Big", "sans-serif"],
        "DM" : ["DM Sans", "sans-serif"],
        "mont": ["Montserrat", "sans-serif"],
      },



      // ANIMATIONS

      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: {transform: 'translateX(-100%)' }
        }
      },

      animation: {
        marquee: 'marquee 2s linear infinite',
      }

    },
  },
  plugins: [],
}

