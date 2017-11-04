import keys from '../@/keys.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} valueA
 * @param {any} valueB
 * @returns {Boolean}
 */
export function equal(valueA, valueB) {
	if (valueA === valueB) {
		return true;
	}
	const ctorA = valueA != null && valueA.constructor;
	const ctorB = valueB != null && valueB.constructor;
	if (ctorA !== ctorB) {
		return false;
	} else if (ctorA === Object) {
		const keysA = keys(valueA);
		const keysB = keys(valueB);
		let i = keysA.length;
		if (i !== keysB.length) {
			return false;
		}
		for (i -= 1; i > -1; i -= 1) {
			const key = keysA[i];
			if (!equal(valueA[key], valueB[key])) {
				return false;
			}
		}
		return true;
	} else if (ctorA === Array) {
		let key = valueA.length;
		if (key !== valueB.length) {
			return false;
		}
		for (key -= 1; key > -1; key -= 1) {
			if (!equal(valueA[key], valueB[key])) {
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
