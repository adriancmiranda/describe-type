var name = require('./name');
var constructorOf = require('./constructor-of');

module.exports = function typify(expected, write) {
	var i = 0;
	if (constructorOf(expected) === Array && expected.length > 0) {
		while (i < expected.length) {
			expected[i] = module.exports(expected[i], write);
			i += 1;
		}
		return expected.join('|');
	}
	return name(expected, write);
};
