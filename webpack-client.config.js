const path = require("path");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const postCssImport = require("postcss-import");
const postCssPresetEnv = require("postcss-preset-env");
const cssNano = require("cssnano");

// env should take "development", "qa", or "production".
module.exports = env => {
  const isDevelopment = env === "development";
  const isProduction = env === "production";

  return {
    target: "web",
    mode: isDevelopment ? "development" : "production",
    devtool: !isProduction ? "cheap-module-source-map" : undefined,
    entry: "./src/client.js",
    output: {
      filename: isDevelopment ? "bundle.js" : "bundle-[contenthash].js",
      path: path.resolve(__dirname, "public")
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment ? "bundle.css" : "bundle-[hash].css"
      }),
      new CopyPlugin([{ from: path.resolve(__dirname, "assets/favicon.ico") }]),
      new ManifestPlugin({ fileName: "../webpack-manifest.json" }),
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
                  postCssImport(),
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
};
