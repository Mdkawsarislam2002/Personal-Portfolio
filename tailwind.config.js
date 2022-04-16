module.exports = {
  mode: "jit",
  content: ["./output/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        SecondColor: "rgb(0,207,93)",
        sideColor: "rgb(10, 184, 157)",
      },
      fontFamily: {
        kurale: ["Kurale", "serif"],
        Lobster: ["Lobster", "cursive"],
        Satisfy: ["Satisfy", "cursive"],
        Permanent: ["Permanent ", "cursive"],
        Oswald: ["Oswald ", "cursive"],
        IndieFlower: ["Indie Flower ", "cursive"],
        SerifDisplay: ["DM Serif Display ", "cursive"],
        Courgette: ["Courgette ", "cursive"],
        merriweather: ["Merriweather ", "cursive"],
        noto: ["Noto Serif ", "cursive"],
      },
    },
  },
  plugins: [],
};
