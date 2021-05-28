module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wan-chai': "url('/assets/img/bg-dark.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
