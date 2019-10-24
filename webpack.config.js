const path = require("path");

const entryPath = "./";
const entryFile = "app.js";

module.exports = {
  entry: [`./${entryPath}/js/${entryFile}`, `./scss/style.scss`], //Tu muszę w tabeli dodać ścieżkę do css, nie muszę nigdzie więcej zmieniać
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};