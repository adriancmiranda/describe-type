var constructorOf = require('./constructor-of');

module.exports = function isBuffer(value) {
	try {
		return constructorOf(value) === Buffer;
	} catch (err) {
		return false;
	}
};
