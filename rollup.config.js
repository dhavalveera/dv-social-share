import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import pkg from './package.json'

export default {
  input: './index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
  ],
  // external: builtins,
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    // resolve({
    //   preferBuiltins: true
    // }),
    // nodeResolve(),
    commonjs({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    terser(),
  ],
}
