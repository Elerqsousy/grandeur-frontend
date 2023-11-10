/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        display: 'display',
      },
      fontFamily: {
        cairo: ['Cairo , sans-serif'],
      },
      colors: {
        prim: '#97bf0f',
        lightgray: '#eae8e8',
        unitedgray: '#f7f7f7',
        sec: '#c2c2c2',
        grayeh: {
          lighter: '#f4f6f9',
          light: '#9e9e9e',
          mid: '#888',
          dark: '#757575',
          darker: '#455a64',
        },
        black: {
          light: '#424242',
          mid: '#2c2c2c',
          dark: '#212529',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': 'bg-white',
          '50%': 'bg-gradient-to-r from-slate-500 to-slate-100',
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
    },
    screens: {
      sm: { max: '767px' },
      md: { min: '767px' },
      lg: { min: '1023px' },
      xl: { max: '1535px' },
      '2xl': { min: '1536px' },
    },
  },
  plugins: [],
};
