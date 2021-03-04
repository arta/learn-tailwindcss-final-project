// After changes to the tailwind config, remember to
// learn-tailwindcss.. % npm run build

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'au-1fr-au': 'auto 1fr auto',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
