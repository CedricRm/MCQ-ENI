/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
    colors: {
      blue: '#003366',
      'dark-blue': '#2196F3',
      'light-blue': '#44619A',
      'ocean-blue': '#E5F0FF',
      purple: '#6671e5',
      'light-purple': '#6D51E4',
      'yellow': "#FFD600",
      black: '#1a1b2f',
      dark: '#000000',
      grey: {
        DEFAULT: '#9698b2',
        30: '#fafafa4d',
        50: '#fafafa80',
      },
      white: {
        DEFAULT: '#ffffff',
        10: '#ffffff1a',
        15: '#ffffff26',
        30: '#ffffff4d',
      },
      green: '#27c064',
      red: '#e42f5a',
      darkRed: '#ad2747',
      orange: '#f2994a',
      primaryLight: {
        background: '#FFFFFF',
        color: '#1A2342',
      },
      primaryDark: {
        background: '#252734',
        color: '#FFFFFF',
        boxShadow: '10px 10px 35px rgba(55, 55, 89, 0.05)',
        stroke: '#8591B9',
      },
      secondaryDark: {
        background: '#1A2342',
        color: '#FFFFFF',
      },
      tertiary: {
        background: '#222D54',
        color: '#FFFFFF',
      },
    },
    fontFamily: {
      'Gilroy': ['Gilroy'],
      'Margem': ['Margem'],
      'Monolisa': ['Monolisa']
    }
  },
  plugins: [],
}

