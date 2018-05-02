'use strict';

var callable = require('../callable.js');

var stream = require('./stream.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
/* eslint-disable no-underscore-dangle */
module.exports = isStreamReadable;
function isStreamReadable(value) {
  return stream(value) && value.readable !== false && value._readableState != null && callable(value._read);
}
