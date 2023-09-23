const path = require("path");
const HtmlWebapckPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    client: {
      overlay: false,
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-react"] },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebapckPlugin({
      template: "./index.html",
    }),
  ],
};
