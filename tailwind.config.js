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
  purge: {
    options: {
      safelist: [
        "border-t-sub1",
        "border-t-sub2",
        "border-t-sub3",
        "border-t-sub4",
      ],
    }
  }
}
