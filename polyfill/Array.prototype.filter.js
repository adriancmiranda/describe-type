'use strict';

var callable = require('../is/callable.js');

var _internalBuiltInJs = require('../internal/built-in.js');

var objectHasOwnProperty = _internalBuiltInJs.objectHasOwnProperty;


/**
 * Creates a new array with all of the elements of this array for which the
 * provided filtering function returns true.
 * @function
 * @memberof utility
 * @param {arraylike} list - list of elements.
 * @param {Function} cmd - Function is a predicate, to test each element of
 * the array. Return true to keep the element, false otherwise, taking three
 * arguments:
 *  - element: The current element being processed in the array.
 *  - index?: The index of the current element being processed in the array.
 *  - array?: The array filter was called upon.
 * @param {any} context? - Value to use as this when executing callback.
 * @returns {Array} - A new array with the elements that pass the test.
 * If no elements pass the test, an empty array will be returned.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
module.exports = filter;
function filter(list, cmd, context) {
  if (list === undefined || list === null) throw new TypeError();
  if (callable(cmd) === false) throw new TypeError();
  var result = [];
  for (var index = 0; index < list.length; index += 1) {
    if (objectHasOwnProperty.call(list, index) === false) continue;
    var value = list[index];
    if (cmd.call(context, value, index, list)) {
      result[result.length] = value;
    }
  }
  return result;
}
