import callable from '../is/callable.next.js';
import keys from './Object.keys.next.js';

/**
 * The reduce() method applies a function against an accumulator and each
 * element in the array (from left to right) to reduce it to a single value.
 * @function
 * @memberof utility
 * @param {arraylike} list - list of elements.
 * @param {Function} cmd - Function to execute on each element in the array,
 * taking four arguments:
 *  - accumulator: The accumulator accumulates the callback's return values;
 *    it is the accumulated value previously returned in the last invocation
 *    of the callback, or initialValue, if supplied (see below).
 *  - currentIndex?: The index of the current element being processed in the array.
 *    Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 *  - array?: The array reduce() was called upon.
 * @param {any} initialValue - Value to use as the first argument to the first
 * call of the callback. If no initial value is supplied, the first element
 * in the array will be used. Calling reduce() on an empty array without an
 * initial value is an error.
 * @param {any} context - Value to use as this when executing callback.
 * @returns {any} The value that results from the reduction.
 */
export default function reduce(list, cmd, initialValue, context) {
	if (list === undefined || list === null) return undefined;
	if (callable(cmd) === false) throw new TypeError(`The second argument should be a function, received "${typeof cmd}"`);
	const size = (0 | list.length);
	if (size) {
		let index = 0;
		if (arguments.length === 2) {
			initialValue = list[index];
			index = 1;
		}
		for (index; index < size; index += 1) {
			initialValue = cmd.call(context || null, initialValue, list[index], index, list);
		}
	}
	return initialValue;
}
