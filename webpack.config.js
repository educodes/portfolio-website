const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "eval-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      },
    ],
  },

  devServer: {
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./src/assets/static/icon_white.png",
    }),

    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
