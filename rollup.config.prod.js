import alias from 'rollup-plugin-alias';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  name: 'Multipane',
  input: 'src/index.js',
  output: {
    file: 'dist/vue-multipane.min.js',
    format: 'umd',
    sourcemap: false,
  },
  plugins: [
    alias({
      '@': './',
    }),
    vue({
      css: false, // Externalize CSS
    }),
    postcss(), // Handle CSS
    buble(),
    nodeResolve({ browser: true, jsnext: true, main: true }),
    commonjs(),
    uglify({}, minify),
  ],
};
