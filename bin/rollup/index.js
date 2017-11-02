const nodeResolve = require('rollup-plugin-node-resolve');
const nodeGlobals = require('rollup-plugin-node-globals');
const nodeBuiltins = require('rollup-plugin-node-builtins');
const cjs = require('rollup-plugin-commonjs');
const optimizeJs = require('rollup-plugin-optimize-js');
const gzip = require('rollup-plugin-gzip');
const uglify = require('rollup-plugin-uglify');
const buble = require('rollup-plugin-buble');
const alias = require('rollup-plugin-alias');
const replace = require('rollup-plugin-replace');
const { minify } = require('uglify-es');
const { env, aliases, flag, vars } = require('../config');
const targets = require('./targets');
const watch = require('./watch');

module.exports = file => ({
  watch,
  indent: env.INDENT,
  name: !!file.module && file.module,
  banner: env.SIGN ? flag : '',
  input: `${file.source}.js`,
  sourcemap: env.MINIFY,
  output: targets(env, file.output, file.format),
  plugins: [
    replace(vars),
    nodeResolve({ jsnext: true, main: true, browser: true }),
    nodeGlobals(),
    nodeBuiltins(),
    cjs(),
    buble(),
    alias(Object.assign({ resolve: ['.js', '.json'] }, aliases)),
  ].concat(file.plugins || []).concat(env.MINIFY ? [
    uglify({ output: { preamble: flag, ascii_only: true } }, minify),
    optimizeJs(),
  ].concat(env.GZIP ? [gzip()] : []) : []),
});
