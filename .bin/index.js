const { env } = require('./config');
const rollup = require('./rollup');

module.exports = ([{
	module: 'as',
	source: 'as/index.next.js',
	output: 'dist/describe-type.as',
	format: env.FORMATS,
}, {
	module: 'has',
	source: 'has/index.next.js',
	output: 'dist/describe-type.has',
	format: env.FORMATS,
}, {
	module: 'internal',
	source: 'internal/index.next.js',
	output: 'dist/describe-type.internal',
	format: env.FORMATS,
}, {
	module: 'is',
	source: 'is/index.next.js',
	output: 'dist/describe-type.is',
	format: env.FORMATS,
}, {
	module: 'ponyfill',
	source: 'ponyfill/index.next.js',
	output: 'dist/describe-type.ponyfill',
	format: env.FORMATS,
}, {
	module: 'shim',
	source: 'shim/index.next.js',
	output: 'dist/describe-type.shim',
	format: env.FORMATS,
}, {
	module: 'schema',
	source: 'schema/index.next',
	output: 'dist/describe-type.schema',
	format: env.FORMATS,
}, {
	module: 'describeType',
	source: 'index.next',
	output: 'dist/describe-type',
	format: env.FORMATS,
}]).map(file => rollup(file));
