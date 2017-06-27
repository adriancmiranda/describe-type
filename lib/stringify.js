var constructorOf = require('./constructor-of');

module.exports = function stringify(value, space, replacer) {
	if (constructorOf(value) === RegExp || constructorOf(value) === Function) {
		return value.toString();
	}
	return JSON.stringify(value, replacer, space);
};
