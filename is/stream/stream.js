'use strict';

var callable = require('../callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = stream;
function stream(value) {
  if (value === undefined || value === null) return false;
  if (value._events === undefined || value._events === null) return false;
  return callable(value.pipe);
} /* eslint-disable no-underscore-dangle */
