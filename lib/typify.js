var name = require('./name');

module.exports = function typify(expected, write) {
	if (Array.isArray(expected) && expected.length > 0) {
		return expected.map(function typeMap(val) {
			return module.exports(val, write);
		}).join('|');
	}
	return name(expected, write);
};
