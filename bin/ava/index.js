const { join, resolve } = require('path');
const { argv, entry, args } = require('../config');
const spawn = require('../@/spawn');

const context = typeof argv.dir === 'string' ? argv.dir : 'test/unit/**';
const pattern = entry.length > 1 ? `{${entry.join(',')}}` : entry[0] || '*';
const files = resolve(`${join(context, pattern)}?(.unit).js`);

spawn.sync('node', ['node_modules/ava/cli.js', files].concat(args));
