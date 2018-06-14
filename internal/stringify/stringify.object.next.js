import reduce from '../../ponyfill/Array.prototype.reduce.next.js';
import keys from '../../ponyfill/Object.keys.next.js';

/**
 *
 * @param {Object} hash - .
 * @returns {String}
 */
export default function stringifyObject(hash) {
	const list = keys(hash);
	const size = list.length - 1;
	return reduce(list, (accumulator, key, index) => {
		const last = index === size;
		const value = JSON.stringify(hash[key]);
		const pair = `${key}:${value}`;
		accumulator += last ? `${pair}}` : `${pair},`;
		return accumulator;
	}, '{');
}
