import callable from '../is/callable.js';
import { objectHasOwnProperty } from './built-in.js';

/**
 *
 * @function
 * @memberof utility
 * @param {arraylike} value
 * @param {int} startIndex
 * @param {int} endIndex
 * @returns {Array}
 */
export default function filter(list, cmd, context) {
  if (list == null) throw new TypeError;
  if (callable(cmd) === false) throw new TypeError;
  const result = [];
  for (let index = 0; index < list.length; index += 1) {
    if (objectHasOwnProperty.call(list, index) === false) continue;
    const value = list[index];
    if (cmd.call(context, value, index, list)) {
    	result[result.length] = value;
    }
  }
  return result;
}
