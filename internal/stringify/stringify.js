const { UNDEFINED, NULL } = require('../constants.js');
const { symbolToString } = require('../built-in.js');
const string = require('../../is/string/string.js');
const array = require('../../is/array/array.js');
const object = require('../../is/object/object.js');
const symbol = require('../../is/symbol.js');
const stringifyArray = require('./stringify.array.js');
const stringifyObject = require('./stringify.object.js');

module.exports = function stringifyValue(value) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	if (string(value)) return value;
	if (symbol(value)) return symbolToString ? symbolToString.call(value) : '';
	if (array(value)) return stringifyArray(value);
	if (object(value)) return stringifyObject(value);
	const result = String(value);
	return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}
