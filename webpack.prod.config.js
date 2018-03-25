const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.config.js");

module.exports = Object.assign({}, baseConfig, {
  mode: "production",
  plugins: baseConfig.plugins.concat([
    new MiniCssExtractPlugin({ filename: "bundle.css" })
  ]),
  module: Object.assign({}, baseConfig.module, {
    rules: baseConfig.module.rules.concat([
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { minimize: true } }
        ],
        exclude: /node_modules/
      }
    ])
  })
});
