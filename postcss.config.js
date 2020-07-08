module.exports = {
  plugins: [
    require("postcss-url"),
    require("autoprefixer"),
    require("css-mqpacker"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
