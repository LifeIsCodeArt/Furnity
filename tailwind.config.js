/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'mainImage': 'url(@/assets/images/mainPage.png)',
      },
    }
  },
  plugins: [],
}

