const { env } = require('./config');
const rollup = require('./rollup');

module.exports = ([{
	module: 'type',
	source: 'source/index',
	output: 'dist/type',
	format: env.FORMATS,
}/*, {
	module: 'type.as',
	source: 'source/as',
	output: 'dist/type.as',
	format: env.FORMATS,
}, {
	module: 'type.constructorNameOf',
	source: 'source/constructor-name-of',
	output: 'dist/type.constructorNameOf',
	format: env.FORMATS,
}, {
	module: 'type.constructorOf',
	source: 'source/constructor-of',
	output: 'dist/type.constructorOf',
	format: env.FORMATS,
}, {
	module: 'type.is',
	source: 'source/is/index',
	output: 'dist/type.is',
	format: env.FORMATS,
}, {
	module: 'type.name',
	source: 'source/name',
	output: 'dist/type.name',
	format: env.FORMATS,
}, {
	module: 'type.of',
	source: 'source/of',
	output: 'dist/type.of',
	format: env.FORMATS,
}, {
	module: 'type.to',
	source: 'source/to',
	output: 'dist/type.to',
	format: env.FORMATS,
}, {
	module: 'type.typify',
	source: 'source/typify',
	output: 'dist/type.typify',
	format: env.FORMATS,
}*/]).map(file => rollup(file));
