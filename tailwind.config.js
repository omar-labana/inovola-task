module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Cairo', 'sans-serif']
    },
    colors: {
      'pri': '#8D5DA7',
      'sec': '#FDB515',
      'tert': '#FFD04C',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
