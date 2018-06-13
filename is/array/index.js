const array = require('./array.js');
const arrayOf = require('./array.of.js');
const arrayEmpty = require('./array.empty.js');

array.of = arrayOf;
array.empty = arrayEmpty;
module.exports = array;
