const asType = require('./as.type.js');
const asAny = require('./as.any.js');
const asInstanceOf = require('./as.instanceOf.js');
const asVectorOf = require('./as.vectorOf.js');

asType.a = asType.an = asType.type = asType;
asType.any = asAny;
asType.instanceOf = asInstanceOf;
asType.vectorOf = asVectorOf;
module.exports = asType;
