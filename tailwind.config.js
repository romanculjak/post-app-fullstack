/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1.2rem',
      md: '1.4rem',
      lg: '1.6rem',
      xl: '2rem',
      '2xl' : '2.4rem',
      '6xl' : '4.8rem',


    },
    extend: {
      colors: {
        primary: '#1A8917',
        'my-gray-100' : '#F4F4F4',
        'my-gray-200' : '#999999',
        'my-gray-400' : '#666666',

      },
      boxShadow: {
        '3xl': '0 4px 4px 0px rgb(0 0 0 / 0.25)',
      }
    },
  },
  plugins: [],
}

