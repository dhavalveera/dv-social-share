const path = require("path");
const CustomDefinePlugin = require("./webpackConfig/CustomDefinePlugin");
const pkg = require("./package.json");

const libraryName = pkg.name;

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: 'typeof self !== "undefined" ? self : this', // Add this line
  },
  plugins: [new CustomDefinePlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname),
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

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
    },
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
};
