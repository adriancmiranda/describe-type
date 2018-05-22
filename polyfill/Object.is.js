/**
 * The Object.is() method determines whether two values are the same value.
 * @function
 * @param {Object} valueA - The first value to compare.
 * @param {Object} valueB - The second value to compare.
 * @returns {Boolean} The Object.is() method determines whether two values are
 * the same value.
 */
module.exports = Object.is || function is(valueA, valueB) {
	if (valueA === valueB) {
		if (valueA === 0) return 1 / valueA === 1 / valueB;
		return true;
	}
	const a = valueA;
	const b = valueB;
	return valueA !== a && valueB !== b;
}
