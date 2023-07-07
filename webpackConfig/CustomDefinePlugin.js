const webpack = require("webpack");

/**
 * TODO: The CustomDefinePlugin class is a webpack plugin that adds a conditional statement to the beginning of each asset file, checking if the navigator object is undefined and setting the self variable to global if it is.
 */
class CustomDefinePlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("CustomDefinePlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "CustomDefinePlugin",
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_CHUNKS,
        },
        (assets) => {
          for (const chunk of compilation.chunks) {
            for (const file of chunk.files) {
              const asset = assets[file];
              const source = asset.source();
              assets[file] = new webpack.sources.RawSource(
                `if (typeof navigator === 'undefined') { self = global; } ${source}`
              );
            }
          }
        }
      );
    });
  }
}

module.exports = CustomDefinePlugin;
