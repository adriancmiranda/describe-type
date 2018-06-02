const { objectHasOwnProperty } = require('../internal/built-in.js');
const slice = require('../internal/slice.js');

/**
 *
 * @name Object.assign
 * @function
 * @global
 * @param {target}
 * @param {...sources}
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
module.exports = Object.assign || function assign(target) {
	if (target === undefined || target === null) {
		throw new TypeError('Cannot convert undefined or null to object');
	}
	const rest = slice(arguments, 1);
	for (let index = 1; index < rest.length; index += 1) {
		const source = rest[index];
		if ((source === undefined || source === null) === false) {
			for (const key in source) {
				if (objectHasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
	}
	return target;
};
