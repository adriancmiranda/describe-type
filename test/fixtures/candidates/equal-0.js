import is from '../polyfill/Object.is.js';
import keys from '../polyfill/Object.keys.js';
import { objectHasOwnProperty } from '../internal/built-in.js';
import { FUNCTION } from '../internal/env.js';

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
	let key;
	let ctorA;
	let ctorB;
	if (valueA === null || valueA === undefined) {
		return is(valueA, valueB);
	} else if (valueB === null || valueB === undefined) {
		return is(valueB, valueA);
	} else if (is(valueA, valueB)) {
		return true;
	}
	if (valueA.__proto__) {
		ctorA = valueA.__proto__;
	} else if (typeof objectHasOwnProperty === FUNCTION) {
		ctorA = objectHasOwnProperty(valueA);
	} else {
		ctorA = (valueA.constructor || {}).prototype;
	}
	if (valueB.__proto__) {
		ctorB = valueB.__proto__;
	} else if (typeof objectHasOwnProperty === FUNCTION) {
		ctorB = objectHasOwnProperty(valueB);
	} else {
		ctorB = (valueB.constructor || {}).prototype;
	}
	if (ctorA) {
		ctorA = ctorA.constructor;
	}
	if (ctorB) {
		ctorB = ctorB.constructor;
	}
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
