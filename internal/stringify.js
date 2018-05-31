const { UNDEFINED, NULL } = require('./constants.js');
const reduce = require('../ponyfill/Array.prototype.reduce.js');
const keys = require('../ponyfill/Object.keys.js');
const string = require('../is/string/string.js');
const array = require('../is/array/array.js');
const object = require('../is/object/object.js');
const symbol = require('../is/symbol.js');

function stringifyArray(list) {
	const size = list.length - 1;
	return reduce(list, (accumulator, item, index) => {
		const last = index === size;
		accumulator += last ? `${stringify(item)}]` : `${stringify(item)},`;
		return accumulator;
	}, '[');
}

function stringifyHash(hash) {
	const list = keys(hash);
	const size = list.length - 1;
	return reduce(list, (accumulator, key, index) => {
		const last = index === size;
		const value = stringify(hash[key]);
		const pair = `${key}:${value}`;
		accumulator += last ? `${pair}}` : `${pair},`;
		return accumulator;
	}, '{');
}

module.exports = function stringify(value) {
	if (value === undefined) return UNDEFINED;
	if (value === null) return NULL;
	if (string(value)) return value;
	if (symbol(value)) return symbolToString ? symbolToString.call(value) : '';
	if (array(value)) return stringifyArray(value);
	if (object(value)) return stringifyHash(value);
	const result = String(value);
	return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}
