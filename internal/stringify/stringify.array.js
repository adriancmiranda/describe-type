const reduce = require('../../ponyfill/Array.prototype.reduce.js');

module.exports = function stringifyArray(list) {
	const size = list.length - 1;
	return reduce(list, (accumulator, item, index) => {
		const last = index === size;
		accumulator += last ? `${stringify(item)}]` : `${stringify(item)},`;
		return accumulator;
	}, '[');
}
