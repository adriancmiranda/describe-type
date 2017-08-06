const { env } = require('./config');
const rollup = require('./rollup');

module.exports = ([{
	module: 'type',
	source: 'index',
	output: 'dist/type',
	format: env.FORMATS,
}, {
	module: 'type.as',
	source: 'lib/as',
	output: 'dist/type.as',
	format: env.FORMATS,
}, {
	module: 'type.constructorNameOf',
	source: 'lib/constructor-name-of',
	output: 'dist/type.constructorNameOf',
	format: env.FORMATS,
}, {
	module: 'type.constructorOf',
	source: 'lib/constructor-of',
	output: 'dist/type.constructorOf',
	format: env.FORMATS,
}, {
	module: 'type.is',
	source: 'lib/is/index',
	output: 'dist/type.is',
	format: env.FORMATS,
}, {
	module: 'type.name',
	source: 'lib/name',
	output: 'dist/type.name',
	format: env.FORMATS,
}, {
	module: 'type.of',
	source: 'lib/of',
	output: 'dist/type.of',
	format: env.FORMATS,
}, {
	module: 'type.to',
	source: 'lib/to',
	output: 'dist/type.to',
	format: env.FORMATS,
}, {
	module: 'type.typify',
	source: 'lib/typify',
	output: 'dist/type.typify',
	format: env.FORMATS,
}]).map(file => rollup(file));
