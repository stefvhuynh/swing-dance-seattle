const webpack = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    contentBase: "./public",
    historyApiFallback: true
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  }
});
