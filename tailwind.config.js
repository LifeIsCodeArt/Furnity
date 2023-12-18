/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    screens: {
      'mobileL': '425px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',

    },
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

