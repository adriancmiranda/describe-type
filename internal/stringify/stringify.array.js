const reduce = require('../../ponyfill/Array.prototype.reduce.js');

/**
 *
 * @param {Array} list - .
 * @returns {String}
 */
module.exports = function stringifyArray(list) {
	const size = list.length - 1;
	return reduce(list, (accumulator, item, index) => {
		const last = index === size;
		accumulator += last ? `${JSON.stringify(item)}]` : `${JSON.stringify(item)},`;
		return accumulator;
	}, '[');
}
