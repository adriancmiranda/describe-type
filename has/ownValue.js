'use strict';

var arraylike = require('../is/arraylike/arraylike.js');

/**
 *
 * @function
 * @memberof has
 * @param {String|Array} context
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = ownValue;
function ownValue(context, value) {
  if (arraylike(context) === false) return false;
  for (var id = context.length - 1; id > -1; id -= 1) {
    if (value === context[id]) {
      return true;
    }
  }
  return false;
}
