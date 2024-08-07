/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        customLightYellow: '#FFFBF7',
        customLightWhite:'#FCFCFC',
        customLightGray:'#F8F8F8'
      },
    },
  },
  plugins: [],
}

