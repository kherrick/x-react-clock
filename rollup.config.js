import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from'rollup-plugin-postcss';
// import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const name = 'xReactComponentWrapper'

export default {
  input: './src/index.tsx',
  external: [],
  plugins: [
    postcss({
      extract: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    resolve({ extensions }),
    json(),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'createElement'
        ],
        'node_modules/@adobe/react-webcomponent/dist/index.js': [
          'createCustomElement', 'DOMModel', 'byContentVal', 'byAttrVal', 'byBooleanAttrVal', 'registerEvent'
        ],
      }
    }),
    babel({ extensions, include: ['src/**/*'] }),
  ],
  output: [
    {
      file: 'lib/cjs/x-react-clock.js',
      format: 'cjs',
    },
    {
      file: 'lib/es/x-react-clock.js',
      format: 'es',
    },
    {
      file: 'lib/iife/x-react-clock.js',
      format: 'iife',
      name,
      globals: {},
    }
  ],
};
