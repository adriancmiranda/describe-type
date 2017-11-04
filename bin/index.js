const { env } = require('./config');
const rollup = require('./rollup');

module.exports = ([{
  module: 'type',
  source: 'source/index',
  output: 'dist/type',
  format: env.FORMATS,
}, {
	module: 'type.@',
	source: 'source/@/index',
	output: 'dist/type.@',
	format: env.FORMATS,
}, {
	module: 'type.as',
	source: 'source/as/index',
	output: 'dist/type.as',
	format: env.FORMATS,
}, {
	module: 'type.builtIn',
	source: 'source/built-in/index',
	output: 'dist/type.built-in',
	format: env.FORMATS,
}, {
  module: 'type.has',
  source: 'source/has/index',
  output: 'dist/type.has',
  format: env.FORMATS,
}, {
	module: 'type.is',
	source: 'source/is/index',
	output: 'dist/type.is',
	format: env.FORMATS,
}, {
	module: 'type.to',
	source: 'source/to/index',
	output: 'dist/type.to',
	format: env.FORMATS,
}]).map(file => rollup(file));
