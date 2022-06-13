const withMT = require('@material-tailwind/react/utils/withMT');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withMT({
  content: [
     'src/**/*.{js,jsx}'
  ],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      base: '1.2rem'
    }
  },
  plugins: []
})
