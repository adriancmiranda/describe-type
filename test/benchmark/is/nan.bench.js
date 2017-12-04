const { Suite } = require('benchmark');
const { number } = require('../../fixtures/datatypes.fixture');
const vendor = require('../../fixtures/vendor.fixture');
const { is } = require('../../../source');

const nan1 = is.nan;
const nan2 = vendor.nan;

number.iterate((datatype) => {
	const suite = new Suite();

	suite.add(`is.nan(${datatype.name})`, () => {
		return nan1(datatype.data);
	});

	suite.add(`vendor.nan(${datatype.name})`, () => {
		return nan2(datatype.data);
	});

	suite.add(`isNan(${datatype.name})`, () => {
		return isNaN(datatype.data);
	});

	suite.add(`${datatype.name} !== ${datatype.name}`, () => {
		return datatype.data !== datatype.data;
	});

	suite.add(`!(${datatype.name} === ${datatype.name})`, () => {
		return !(datatype.data === datatype.data);
	});

	suite.add(`${datatype.name} === ${datatype.name}`, () => {
		return datatype.data === datatype.data;
	});

	suite.on('cycle', (evt) => {
		console.log(String(evt.target));
	});

	suite.on('complete', function () {
		console.log('\nFastest is', this.filter('fastest').map('name'), '\n');
	});

	suite.run();
});
