/* eslint-disable */
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';


const config = {
  input: './packages/react-native-web/dist/index.js',
  output: [
    {
      file: packageJSON.browser, // file: './packages/react-native-web/dist/umd/index.umd.js',
      format: 'umd',
      name: 'ReactNative',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),  // To locate 3rd party modules in node_modules
    commonjs(), // To use CommonJS syntax
    json(),     // To import json
  ],
  external: ['react', 'react-is', 'react-dom']
};

// Set the environment variable before you run the build command:
// > NODE_ENV=production npm run build
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;