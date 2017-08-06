const { execSync } = require('child_process');
const { sync } = require('glob');
const { argv } = require('../config');

let files = '**/*';
if (argv.f) {
	files = Array.isArray(argv.f) ? `{${argv.f.join(',')}}` : argv.f;
}

sync(`${process.cwd()}/test/benchmark/${files}.bench.js`).forEach((file) => {
	execSync(`babel-node --presets es2015 ${file}`, {
		stdio: 'inherit',
	});
});
