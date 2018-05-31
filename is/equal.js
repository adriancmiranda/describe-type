const is = require('../ponyfill/Object.is.js');
const keys = require('../ponyfill/Object.keys.js');
const constructorOf = require('../internal/constructorOf.js');

/**
 * The equal() method determines whether two values are the same value.
 * @function
 * @memberof is
 * @param {any} valueA - The first value to compare.
 * @param {any} valueB - The second value to compare.
 * @returns {Boolean} A Boolean indicating whether or not the two arguments are
 * the same value.
 */
module.exports = function equal(valueA, valueB) {
	let size;
	if (valueA === undefined || valueA === null) {
		return is(valueA, valueB);
	} else if (valueB === undefined || valueB === null) {
		return is(valueB, valueA);
	} else if (is(valueA, valueB)) {
		return true;
	}
	const constructorA = constructorOf(valueA);
	const constructorB = constructorOf(valueB);
	if (constructorA === constructorB === false) {
		return false;
	} else if (constructorA === Object) {
		const keysA = keys(valueA);
		const keysB = keys(valueB);
		size = keysA.length;
		if (size === keysB.length === false) {
			return false;
		}
		for (size -= 1; size > -1; size -= 1) {
			const key = keysA[size];
			if (equal(valueA[key], valueB[key]) === false) {
				return false;
			}
		}
		return true;
	} else if (constructorA === Array) {
		size = valueA.length;
		if (size === valueB.length === false) {
			return false;
		}
		for (size -= 1; size > -1; size -= 1) {
			if (equal(valueA[size], valueB[size]) === false) {
				return false;
			}
		}
		return true;
	} else if (constructorA === Function) {
		return valueA.prototype === valueB.prototype;
	} else if (constructorA === Date) {
		return valueA.getTime() === valueB.getTime();
	} else if (constructorA === RegExp) {
		return valueA.source === valueB.source && valueA.flags === valueB.flags;
	}
	return false;
}
