/**
 * The Object.is() method determines whether two values are the same value.
 * @function
 * @param {Object} value1 - The first value to compare.
 * @param {Object} value2 - The second value to compare.
 * @returns {Boolean}
 */
export default Object.is || function is(x, y) {
	if (x === y) {
		if (x === 0) return 1 / x === 1 / y;
		return true;
	}
	const x1 = x;
	const y1 = y;
	return x !== x1 && y !== y1;
}
