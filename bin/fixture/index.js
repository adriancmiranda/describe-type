const { join, resolve } = require('path');
const { sync } = require('glob');
const { argv } = require('../config');
const spawn = require('../@/spawn');

const context = typeof argv.dir === 'string' ? argv.dir : 'test/fixtures/**';
const files = argv.$0.length > 1 ? `{${argv.$0.join(',')}}` : argv.$0[0] || '*';
sync(resolve(`${join(context, files)}?(.fixture).js`)).forEach(file => {
  spawn.sync('babel-node', ['--presets', 'env,flow', file]);
});

