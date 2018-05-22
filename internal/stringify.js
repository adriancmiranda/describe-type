// TODO: to implement
const { UNDEFINED, NULL, PREFIX_SEAL } = require('../internal/constants.js');
const startsWith = require('../polyfill/String.prototype.startsWith.js');
const type = require('../is/type.js');
const asType = require('../as/as.type.js');

module.exports = function stringify(value, replacer, space) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	let seal = asType(String, value.toString, value);
	if (startsWith(seal, PREFIX_SEAL)) seal = '';
	return seal || JSON.stringify(value, replacer, space);
}
