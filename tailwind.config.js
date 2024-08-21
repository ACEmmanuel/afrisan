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
        "IBM": ["IBM Plex Sans", "sans-serif"],
      },

      fontSize: {
        '16px' : '1rem',
        '20px' : '1.25rem',
        
      },



      // ANIMATIONS

      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: {transform: 'translateX(-100%)' }
        }
      },

      animation: {
        'marquee': 'marquee 2s linear infinite',
      }

    },
  },
  plugins: [],
}

