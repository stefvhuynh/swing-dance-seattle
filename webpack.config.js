const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new CleanWebpackPlugin(["public"]),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
  module: {
    rules: [
      { test: /\.js$/, use: ["babel-loader", "eslint-loader"], exclude: /node_modules/ }
    ]
  }
};
