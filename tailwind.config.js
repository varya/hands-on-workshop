module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        "v-red": "rgba(236, 78, 75, 1)",
        "v-yellow": "rgba(248, 209, 121, 1)",
        "v-blue": "rgba(133, 216, 243, 1)",
        "v-dark-blue": "rgba(0, 185, 245, 1)",
      },
      backgroundImage: () => ({
        "design-systems": "url('/balazs-ketyi-9VzoRKfBsMM-unsplash.jpg')",
      }),
    },
  },
};
