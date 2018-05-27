const regexp = require('./regexp.js');
const regexpFlags = require('./regexp.flags.js');
const regexpString = require('./regexp.string.js');

regexp.flags = regexpFlags;
regexp.string = regexpString;
module.exports = regexp;
