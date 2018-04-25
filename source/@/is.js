/**
 * The Object.is() method determines whether two values are the same value.
 * @function
 * @param {Object} value1 - The first value to compare.
 * @param {Object} value2 - The second value to compare.
 * @returns {Boolean} The Object.is() method determines whether two values are
 * the same value.
 */
export default Object.is || function is(valueA, valueB) {
	if (valueA === valueB) {
		if (valueA === 0) return 1 / valueA === 1 / valueB;
		return true;
	}
	const $valueA = valueA;
	const $valueB = valueB;
	return valueA !== $valueA && valueB !== $valueB;
}
