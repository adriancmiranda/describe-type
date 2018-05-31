const stringify = require('./stringify.js');
const stringifyArray = require('./stringify.array.js');
const stringifyObject = require('./stringify.object.js');

stringify.array = stringifyArray;
stringify.object = stringifyObject;
module.exports = stringify;
