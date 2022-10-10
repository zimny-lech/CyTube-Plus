import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
  input: 'main.js',
  output: {
    file: 'build/main.js',
    format: 'iife',
    name: 'cydj',
  },
  input: 'mainv2.js',
  output: {
    file: 'build/mainv2.js',
    format: 'iife',
    name: 'cydjv2',
  },
  plugins: [nodeResolve()],
};
