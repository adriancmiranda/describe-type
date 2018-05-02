'use strict';

var callable = require('../callable.js');

var streamDuplex = require('./stream.duplex.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
/* eslint-disable no-underscore-dangle */
module.exports = isStreamTransform;
function isStreamTransform(value) {
  return streamDuplex(value) && value._transformState != null && callable(value._transform);
}
