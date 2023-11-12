/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.twig"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#000000",
          2: "#ffffff",
          3: "#7C9D96",
          4: "#909D9B",
          5: "#C2D1D0",
        },
      },
      maxWidth: {
        screen: "1376px",
      },
      lineHeight: {
        header: '165%',
      },
      borderRadius: {
        box: 10,
      },
      fontFamily: {
        yekan: ["IRANYekanX", "sans-serif"],
      },
    },
  },
  plugins: [],
};
