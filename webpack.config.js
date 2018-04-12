const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "assets/bundle-[hash].js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "assets/bundle-[hash].css" }),
    new AssetsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1, minimize: true } },
          "postcss-loader"
        ],
        exclude: /node_modules/
      }
    ]
  }
};
