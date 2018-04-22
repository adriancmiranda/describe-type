const { join, resolve } = require('path');
const { sync } = require('glob');
const { argv } = require('../config');
const spawn = require('../@/spawn');

const args = process.argv.slice(3);
const context = typeof argv.dir === 'string' ? argv.dir : 'test/unit/**';
const files = argv.$0.length > 1 ? `{${argv.$0.join(',')}}` : argv.$0[0] || '*';
sync(resolve(`${join(context, files)}?(.unit).js`)).forEach(file => {
	spawn.sync('node', ['node_modules/ava/cli.js', file].concat(args));
});
