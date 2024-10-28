/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#fcfaf5',
        'primary-text-color': '#993329',
        'third-text-color': '#dff994',
      },
      scale: {
        'ninety': '0.98',
      },
      fontFamily: {
        'wixMadeforDisplay': "Wix Madefor Display",
        'wixMadeforText': "Wix Madefor Text",
        'cormorantGaramond': "Cormorant Garamond",
      }
    },
  },
  plugins: [],
}
