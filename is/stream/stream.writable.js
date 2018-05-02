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
module.exports = isStreamWritable;
function isStreamWritable(value) {
  return stream(value) && value.writable !== false && value._writableState != null && callable(value._write);
}
