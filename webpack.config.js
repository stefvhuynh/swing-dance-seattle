const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const postCssPresetEnv = require("postcss-preset-env");
const cssNano = require("cssnano");

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "bundle-[contenthash].js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "bundle-[hash].css" }),
    new CopyPlugin([{ from: path.resolve(__dirname, "assets/favicon.ico") }]),
    new ManifestPlugin({ fileName: "../webpack-manifest.json" })
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
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                postCssPresetEnv({ browsers: "last 2 versions" }),
                cssNano()
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "initial"
        }
      }
    }
  }
};
