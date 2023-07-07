const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
            presets: ["@babel/preset-react", "@babel/preset-env"],
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
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    extensions: [".js", ".jsx"],
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 10 * 1024 * 1024,
    maxAssetSize: 10 * 1024 * 1024,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["dist/**/*", "!dist/**/*.txt"],
    }),
  ],
};
