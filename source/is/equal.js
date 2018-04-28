import is from '../@/is.js';
import keys from '../@/keys.js';
import getPrototypeOf from '../@/getPrototypeOf.js';

/**
 * The equal() method determines whether two values are the same value.
 * @function
 * @memberof is
 * @param {any} valueA - The first value to compare.
 * @param {any} valueB - The second value to compare.
 * @returns {Boolean} A Boolean indicating whether or not the two arguments are
 * the same value.
 */
export default function equal(valueA, valueB) {
	if (is(valueA, valueB)) {
		return true;
	}
	let key;
	const ctorA = valueA == null === false && getPrototypeOf(valueA).constructor;
	const ctorB = valueB == null === false && getPrototypeOf(valueB).constructor;
	if (ctorA === ctorB === false) {
		return false;
	} else if (ctorA === Object) {
		const keysA = keys(valueA);
		const keysB = keys(valueB);
		let i = keysA.length;
		if (i === keysB.length === false) {
			return false;
		}
		for (i -= 1; i > -1; i -= 1) {
			key = keysA[i];
			if (equal(valueA[key], valueB[key]) === false) {
				return false;
			}
		}
		return true;
	} else if (ctorA === Array) {
		key = valueA.length;
		if (key === valueB.length === false) {
			return false;
		}
		for (key -= 1; key > -1; key -= 1) {
			if (equal(valueA[key], valueB[key]) === false) {
				return false;
			}
		}
		return true;
	} else if (ctorA === Function) {
		return valueA.prototype === valueB.prototype;
	} else if (ctorA === Date) {
		return valueA.getTime() === valueB.getTime();
	}
	return false;
}
