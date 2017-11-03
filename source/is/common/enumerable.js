import number from '../shortcuts/number.js';
import callable from '../shortcuts/callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function enumerable(value) {
  return value != null && number(value.length) && callable(value) === false;
}
