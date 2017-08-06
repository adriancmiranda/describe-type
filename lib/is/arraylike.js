const constructorOf = require('../constructor-of');

module.exports = function isArraylike(value) {
	return (constructorOf(value) === Array || (!!value &&
		typeof value === 'object' && typeof value.length === 'number' &&
		(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
	));
};
