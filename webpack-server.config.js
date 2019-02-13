const path = require("path");

const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

// env should take "development", "qa", or "production".
module.exports = env => ({
  target: "node",
  mode: env === "production" ? "production" : "development",
  entry: ["@babel/polyfill", "./src/server.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "lib"),
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()]
});
