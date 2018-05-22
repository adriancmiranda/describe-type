const notType = require('./not.type.js');
const notAny = require('./not.any.js');
const notInstanceOf = require('./not.instanceOf.js');
const notVectorOf = require('./not.vectorOf.js');

notType.a = notType.an = notType.type = notType;
notType.any = notAny;
notType.instanceOf = notInstanceOf;
notType.vectorOf = notVectorOf;
module.exports = notType;
