const fn = require('./fn.js');
const fnNative = require('./fn.native.js');
const fnCallable = require('./fn.callable.js');
const fnCaste = require('./fn.caste.js');

fn.fn = fn;
fn.native = fnNative;
fn.callable = fnCallable;
fn.caste = fnCaste;
module.exports = fn;
