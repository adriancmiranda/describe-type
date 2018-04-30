const { env } = require('./config');
const rollup = require('./rollup');

module.exports = ([{
	module: 'type.internal',
	source: 'source/internal/index.js',
	output: 'dist/type.internal',
	format: env.FORMATS,
}, {
	module: 'type.builtIn',
	source: 'source/built-in/index.js',
	output: 'dist/type.built-in',
	format: env.FORMATS,
}, {
	module: 'type.has',
	source: 'source/has/index.js',
	output: 'dist/type.has',
	format: env.FORMATS,
}, {
	module: 'type.is',
	source: 'source/is/index.js',
	output: 'dist/type.is',
	format: env.FORMATS,
}, {
	module: 'type.as',
	source: 'source/as/index.js',
	output: 'dist/type.as',
	format: env.FORMATS,
}, {
	module: 'type',
	source: 'source/index',
	output: 'dist/type',
	format: env.FORMATS,
}]).map(file => rollup(file));
