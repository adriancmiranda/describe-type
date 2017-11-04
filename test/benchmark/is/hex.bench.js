const { Suite } = require('benchmark');
const datatypes = require('../../fixtures/datatypes.fixture').numbers;
const { is } = require('../../../source');

const hex0 = is.hex;
const hex1 = h => parseInt(h, 16).toString(16) === h.toLowerCase();

datatypes.forEach((datatype) => {
	const suite = new Suite();

	suite.add(`is.hex(${datatype.name})`, () => {
		return hex0(datatype.data);
	});

	suite.add(`hex(${datatype.name})`, () => {
		return hex1(datatype.data);
	});

	suite.on('cycle', (evt) => {
		console.log(String(evt.target));
	});

	suite.on('complete', function () {
		console.log('\nFastest is', this.filter('fastest').map('name'), '\n');
	});

	suite.run();
});
