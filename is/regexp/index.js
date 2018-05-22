const regexp = require('./regexp.next.js');
const regexpString = require('./regexp.string.next.js');

regexp.empty = regexpString;
module.exports = regexp;
