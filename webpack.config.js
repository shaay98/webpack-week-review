'use strict';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
entry: "./src/index.js",
output: {
path: path.resolve(__dirname, "dist"),
filename: "bundle.js", clean:"true"
},
module: {
rules: [
{
test: /.m?js$/,
test: /\.css$/, 
exclude: /node_modules/,
use: {
loader: "babel-loader",    
loader: "style-loader",
loader: "css-loader",
options: {
presets: ["@babel/preset-env"]
}
}
}
]
},
mode: "development"
}