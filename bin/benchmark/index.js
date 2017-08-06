const { execSync } = require('child_process');
const { basename } = require('path');
const { sync } = require('glob');

sync(`${__dirname}/!(index).js`).forEach((file) => {
	execSync(`node ./test/benchmark/${basename(file)}`, {
		stdio: 'inherit',
	});
});
