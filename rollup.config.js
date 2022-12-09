import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import { browser, main, module } from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: browser,
      format: 'umd',
      name: 'DashboardComponents',
    },
    {
      file: main,
      format: 'cjs',
    },
    {
      file: module,
      format: 'es',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      configFile: './babel.config.rollup.js',
      babelHelpers: 'bundled',
    }),
    resolve({
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
