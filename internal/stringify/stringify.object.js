const reduce = require('../../ponyfill/Array.prototype.reduce.js');
const keys = require('../../ponyfill/Object.keys.js');

/**
 *
 * @param {Object} hash - .
 * @returns {String}
 */
module.exports = function stringifyObject(hash) {
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
