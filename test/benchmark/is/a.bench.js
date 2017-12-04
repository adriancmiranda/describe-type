const { Suite } = require('benchmark');
const { all } = require('../../fixtures/datatypes.fixture');
const { is } = require('../../../source');

all.iterate((datatype) => {
	const name = datatype.name;
	const type = datatype.type;
	const data = datatype.data;
	const seal = datatype.seal;
	const suite = new Suite();

	suite.add(`is.a(${name})`, () => {
		return is.a(type, data);
	});

	suite.add(`is.any(${name})`, () => {
		return is.any(type, data);
	});

	suite.add(`Object.prototype.toString.call(${name})`, () => {
		return Object.prototype.toString.call(data) === seal;
	});

	suite.on('cycle', (evt) => {
		console.log(String(evt.target));
	});

	suite.on('complete', function () {
		console.log('\nFastest is', this.filter('fastest').map('name'), '\n');
	});

	suite.run();
});
