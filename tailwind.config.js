/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}", "./editor_page/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Code'],
        'spacemono': ['Space Mono']
      }
    },
  },
  plugins: [],
}

