'use strict';

var arraylike = require('../is/arraylike/arraylike.js');

var eachProperty = require('./eachProperty.js');

var eachValue = require('./eachValue.js');

/**
 *
 * @function
 * @param {any} value
 * @param {Function} cmd
 * @param {Object} context
 * @param {Boolean} keepReverseOrGetInheritedProps
 * @returns {?}
 */
module.exports = each;
function each(value, cmd, context, keepReverseOrGetInheritedProps) {
  if (arraylike(value)) return eachValue(value, cmd, context, keepReverseOrGetInheritedProps);
  return eachProperty(value, cmd, context, keepReverseOrGetInheritedProps);
} /* eslint-disable no-restricted-syntax */
