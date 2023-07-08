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
      "rose" : "#FFA592", // rose
      "blue" : "#171DA1", // blue
      "lavendel" : "#CEC4F7", // lavendel
      "violet" : "#9D47A3", // violet
    },
    extend: {
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        '15rem': '15rem',
        '10rem': '10rem',
        '5rem': '5rem',
        '50%': '50%',
      },
      height: {
        160: '30rem',
      }
    },
  },
  plugins: [],
  purge: {
    options: {
      safelist: [
        "border-t-rose",
        "border-t-blue",
        "border-t-lavendel",
        "border-t-violet",
        "border-b-rose",
        "border-b-blue",
        "border-b-lavendel",
        "border-b-violet",
        "fill-rose",
        "fill-blue",
        "fill-lavendel",
        "fill-violet",
        "fill-white",
        "fill-black",
        "bg-rose",
        "bg-blue",
        "bg-lavendel",
        "bg-violet",
      ],
    }
  }
}
