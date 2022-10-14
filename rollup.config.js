import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
  input: 'main.js',
  output: {
    file: 'build/main.js',
    format: 'iife',
    name: 'cydj',
  },
  plugins: [nodeResolve()],
};
