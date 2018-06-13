const asType = require('./as.type.js');
const asAny = require('./as.any.js');
const asInstanceOf = require('./as.instanceOf.js');
const asArrayOf = require('./as.arrayOf.js');

asType.a = asType.an = asType.type = asType;
asType.any = asAny;
asType.instanceOf = asInstanceOf;
asType.arrayOf = asArrayOf;
module.exports = asType;
