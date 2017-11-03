import callable from '../shortcuts/callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function primitive(value) {
  if (value == null) return true;
  if (callable(value.valueOf)) value = value.valueOf();
  if (callable(value) || typeof value === 'object') {
    return false;
  }
  return true;
}
