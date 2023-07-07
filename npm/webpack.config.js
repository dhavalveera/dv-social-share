const path = require("path");
// const CustomDefinePlugin = require("./webpackConfig/CustomDefinePlugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "dv-social-share",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: 'typeof self !== "undefined" ? self : this', // Add this line
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  // plugins: [
  //   // ... other plugins ...
  //   new CustomDefinePlugin(),
  // ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 10 * 1024 * 1024,
    maxAssetSize: 10 * 1024 * 1024,
  },
};
