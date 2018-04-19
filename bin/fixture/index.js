const path = require('path');
const { sync } = require('glob');
const { argv } = require('../config');
const spawn = require('../@/spawn');

const files = Array.isArray(argv.f) ? `{${argv.f.join(',')}}` : argv.f || '**/*';
sync(path.resolve(`test/fixtures/${files}?(.fixture).js`)).forEach(file => {
	spawn.sync('babel-node', ['--presets', 'env,flow', file]);
});
