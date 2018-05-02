'use strict';

var apply = require('./apply.js');

/**
 *
 * @param {Object} value
 * @param {String} key
 * @param {Function} cmd
 * @param {Object} ctx
 * @param {any} args
 * @returns {any}
 */
module.exports = resolveProperty;
function resolveProperty(value, key, readStatic, cmd, ctx, args) {
  if (readStatic || key !== 'prototype' && key !== 'length' && key !== 'name') {
    var item = value[key];
    return apply(cmd, ctx || item, [item, key, value, args]);
  }
  return undefined;
}
