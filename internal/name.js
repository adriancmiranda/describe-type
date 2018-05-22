const { reToPropName } = require('../internal/patterns.js');
const string = require('../is/string/string.js');
const object = require('../is/object/object.js');
const constructorNameOf = require('./constructorNameOf.js');
const typeOf = require('./typeOf.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @param {Boolean} write
 * @returns {String}
 */
module.exports = function name(value, write) {
	if (value === undefined || value === null || object(value)) {
		return typeOf(value);
	}
	return value.name || (write &&
		string(value) ? value.replace(reToPropName, '_') : constructorNameOf(value)
	);
}
