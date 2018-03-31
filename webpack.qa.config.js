const webpack = require("webpack");
const merge = require("webpack-merge");

const prodConfig = require("./webpack.prod.config.js");

module.exports = merge(prodConfig.base, {
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("qa")
    })
  ]
});
