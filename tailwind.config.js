const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./templates/**/*.twig"
  ],
  theme: {
    colors: {
      "primary" : "#ACEAD5",
      "shade" : "#2BB989",
      "black" : "#272839",
      "grey" : "#E9F3FD",
      "white" : "#FFFFFF",
      "sub1" : "#FFA592",
      "sub2" : "#171DA1",
      "sub3" : "#CEC4F7",
      "sub4" : "#9D47A3",
    },
    extend: {},
  },
  plugins: [],
}
