import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/dv-social-share.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/dv-social-share.es.js',
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
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
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
