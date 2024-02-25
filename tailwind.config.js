/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        LeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        RightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        play:{
          '0%':{ transform: "scale(0)",opacity:"1" },
          '50%':{ transform: "scale(2)",opacity:"0" },
          '100%':{ transform: "scale(0)",opacity:"0" },
        }
      },
      animation:{
        LeftRight : ' LeftToRight 0.5s ease-in-out',
        RightLeft : ' RightToLeft 0.5s ease-in-out',
        play: " play 0.7s ease-in-out "
      }
    },
  },
  plugins: [],
}

