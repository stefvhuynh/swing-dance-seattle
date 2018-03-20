const baseConfig = require("./webpack.config.js");

module.exports = Object.assign({}, baseConfig, {
  devServer: {
    contentBase: "./public"
  },
  mode: "development"
});
