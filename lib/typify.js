var name = require('./name');

module.exports = function typify(expected, write) {
	var i = 0;
	if (Array.isArray(expected) && expected.length > 0) {
		while (i < expected.length) {
			expected[i] = module.exports(expected[i], write);
			i += 1;
		}
		return expected.join('|');
	}
	return name(expected, write);
};
