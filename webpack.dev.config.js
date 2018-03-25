const baseConfig = require("./webpack.config.js");

module.exports = Object.assign({}, baseConfig, {
  mode: "development",
  devServer: {
    contentBase: "./public",
    historyApiFallback: true
  },
  devtool: "cheap-module-source-map",
  module: Object.assign({}, baseConfig.module, {
    rules: baseConfig.module.rules.concat([
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ])
  })
});
