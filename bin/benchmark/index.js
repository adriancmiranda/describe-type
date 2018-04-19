const { join, resolve } = require('path');
const { sync } = require('glob');
const { argv } = require('../config');
const spawn = require('../@/spawn');

const context = typeof argv.c === 'string' ? argv.c : 'test/benchmark/**';
const files = Array.isArray(argv.f) ? `{${argv.f.join(',')}}` : argv.f || '*';
sync(resolve(`${join(context, files)}.bench.js`)).forEach(file => {
  spawn.sync('babel-node', ['--presets', 'env,stage-2', file]);
});
