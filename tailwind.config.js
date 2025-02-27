/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'title-lg': '48px',
        'title-md': '36px',
        'title-sm': '20px',
        'text-lg': '18px',
        'text-md': '16px',
        'text-sm': '14px',
        caption: '12px',
      },
      lineHeight: {
        'title-lg': '120%',
        'title-md': '120%',
        'title-sm': '130%',
        'text-lg': '140%',
        'text-md': '140%',
        'text-sm': '140%',
        caption: '140%',
      },
      backgroundColor: {
        white: '#FBFBFB',
        'light-gray': '#CCCCCC',
        black: '#1C1C1C',
        'deep-gray': '#2E2E2E',
        'deep-mint': '#019B98',
        mint: '#55CCC9',
        'light-mint': '#C1FFFF',
        'point-color': '#DD0025',
        'point-color2': '#FFBFAB',
        gray: '#C8C8C8',
        darkmint: '#014E60',
        'graish-green': '#3F7A8D',
      },
      textColor: {
        white: '#FBFBFB',
        'light-gray': '#CCCCCC',
        black: '#1C1C1C',
        'deep-gray': '#2E2E2E',
        'deep-mint': '#019B98',
        mint: '#55CCC9',
        'light-mint': '#C1FFFF',
        'point-color': '#DD0025',
        'point-color2': '#FFBFAB',
        gray: '#C8C8C8',
        darkmint: '#014E60',
        'graish-green': '#3F7A8D',
      },
      colors: {
        white: '#FBFBFB',
        'light-gray': '#CCCCCC',
        black: '#1C1C1C',
        'deep-gray': '#2E2E2E',
        'deep-mint': '#019B98',
        mint: '#55CCC9',
        'light-mint': '#C1FFFF',
        'point-color': '#DD0025',
        'point-color2': '#FFBFAB',
        gray: '#C8C8C8',
        darkmint: '#014E60',
        'graish-green': '#3F7A8D',
      },
    },
  },
  plugins: [],
};
