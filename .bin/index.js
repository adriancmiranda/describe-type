const { env } = require('./config');
const rollup = require('./rollup');

module.exports = ([{
	module: 'describeType.internal',
	source: 'internal/index.next.js',
	output: '@dist/describe-type.internal',
	format: env.FORMATS,
}, {
	module: 'describeType.has',
	source: 'has/index.next.js',
	output: '@dist/describe-type.has',
	format: env.FORMATS,
}, {
	module: 'describeType.is',
	source: 'is/index.next.js',
	output: '@dist/describe-type.is',
	format: env.FORMATS,
}, {
	module: 'describeType.as',
	source: 'as/index.next.js',
	output: '@dist/describe-type.as',
	format: env.FORMATS,
}, {
	module: 'describeType',
	source: 'index.next',
	output: '@dist/describe-type',
	format: env.FORMATS,
}]).map(file => rollup(file));
