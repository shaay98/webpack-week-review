"use strict";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlWebpack = new HtmlWebpackPlugin({ template: "./index.html" });

export default {
  plugins: [htmlWebpack],
  entry: "./src/index.js",
  output: { filename: "bundle.js", path: resolve(__dirname, "dist") },
  module: {
    rules: [
      { test: /.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /.(?:js|mjs|cdj)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
