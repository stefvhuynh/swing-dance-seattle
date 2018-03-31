const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.config.js");

const baseProdConfig = merge(baseConfig, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({ filename: "bundle.css" })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { minimize: true } }
        ],
        exclude: /node_modules/
      }
    ]
  }
});

const prodConfig = merge(baseProdConfig, {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});

module.exports = {
  default: prodConfig,
  base: baseProdConfig
};
