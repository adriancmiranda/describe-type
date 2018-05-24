const flow = require('rollup-plugin-flow');
const nodeResolve = require('rollup-plugin-node-resolve');
const es3 = require('rollup-plugin-es3');
const cjs = require('rollup-plugin-commonjs');
const optimizeJs = require('rollup-plugin-optimize-js');
const gzip = require('rollup-plugin-gzip');
const buble = require('rollup-plugin-buble');
const alias = require('rollup-plugin-alias');
const replace = require('rollup-plugin-replace');
const { terser } = require('rollup-plugin-terser');
const { minify } = require('uglify-es');
const { env, aliases, flag, vars, dependencies } = require('../config');
const nodeConfig = require('./node');
const flowConfig = require('./flow');
const targets = require('./targets');
const watch = require('./watch');

module.exports = file => ({
  watch,
  input: file.source,
  output: targets.parseOutput(file),
  external: dependencies,
  plugins: [
    replace(vars),
    flow(flowConfig(file)),
    nodeResolve(nodeConfig(file, !targets.hasFormat(file, 'cjs'))),
    cjs(),
    buble(),
    es3(['defineProperty', 'freeze']),
    alias(Object.assign({ resolve: ['.js', '.json'] }, aliases)),
  ].concat(file.plugins || []).concat(env.MINIFY ? [
    terser({ output: { preamble: flag, ascii_only: true } }, minify),
    optimizeJs(),
  ].concat(env.GZIP ? [gzip()] : []) : []),
});
