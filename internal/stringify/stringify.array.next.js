import reduce from '../../ponyfill/Array.prototype.reduce.next.js';

/**
 *
 * @param {Array} list - .
 * @returns {String}
 */
export default function stringifyArray(list) {
	const size = list.length - 1;
	return reduce(list, (accumulator, item, index) => {
		const last = index === size;
		accumulator += last ? `${JSON.stringify(item)}]` : `${JSON.stringify(item)},`;
		return accumulator;
	}, '[');
}
