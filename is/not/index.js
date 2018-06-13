const notType = require('./not.type.js');
const notAny = require('./not.any.js');
const notInstanceOf = require('./not.instanceOf.js');
const notArrayOf = require('./not.arrayOf.js');

notType.a = notType.an = notType.type = notType;
notType.any = notAny;
notType.arrayOf = notArrayOf;
notType.instanceOf = notInstanceOf;
module.exports = notType;
