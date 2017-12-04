const { Suite } = require('benchmark');
const { all } = require('../../fixtures/datatypes.fixture');
const vendor = require('../../fixtures/vendor.fixture');
const { is } = require('../../../source');

const exotic = is.exotic;
const primitive0 = (value) => !exotic(value);
const primitive1 = is.primitive;
const primitive2 = vendor.primitive;

all.iterate((datatype) => {
	const suite = new Suite();

	suite.add(`!is.exotic(${datatype.name})`, () => {
		return primitive0(datatype);
	});

	suite.add(`is.primitive(${datatype.name})`, () => {
		return primitive1(datatype);
	});

	suite.add(`vendor.primitive(${datatype.name})`, () => {
		return primitive2(datatype);
	});

	suite.on('cycle', (evt) => {
		console.log(String(evt.target));
	});

	suite.on('complete', function () {
		console.log('\nFastest is', this.filter('fastest').map('name'), '\n');
	});

	suite.run();
});
