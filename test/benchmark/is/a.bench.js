const { Suite } = require('benchmark');
const datatypes = require('../../fixtures/datatypes.fixture').default;
const { is } = require('../../../source');

datatypes.forEach((datatype) => {
	const suite = new Suite();

	suite.add(`is.a(${datatype.name})`, () => {
		return is.a(datatype.type, datatype.data);
	});

	suite.add(`is.any(${datatype.name})`, () => {
		return is.any(datatype.type, datatype.data);
	});

	suite.add(`Object.prototype.toString.call(${datatype.name})`, () => {
		return Object.prototype.toString.call(datatype.data) === datatype.seal;
	});

	suite.on('cycle', (evt) => {
		console.log(String(evt.target));
	});

	suite.on('complete', function () {
		console.log('\nFastest is', this.filter('fastest').map('name'), '\n');
	});

	suite.run();
});
