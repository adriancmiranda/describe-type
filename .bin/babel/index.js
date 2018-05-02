#! /usr/bin/env node
const glob = require('glob');
const { join, resolve } = require('path');
const { argv, entry, args } = require('../config');
const spawn = require('../@/spawn');

const context = typeof argv.dir === 'string' ? argv.dir : '';
const files = entry.length > 1 ? `{${entry.join(',')}}` : entry[0] || '*';

glob.sync(resolve(join(context, files))).forEach(file => {
	spawn.sync('node_modules/.bin/babel', [file, '--out-file', file.replace('.next', '')], {
		stdio: ['pipe', 1, 2],
	});
});
