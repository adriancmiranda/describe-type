'use strict';

var notType = require('./not.type.js');

var notAny = require('./not.any.js');

var notInstanceOf = require('./not.instanceOf.js');

var notVectorOf = require('./not.vectorOf.js');

notType.a = notType.an = notType.type = notType;
notType.any = notAny;
notType.instanceOf = notInstanceOf;
notType.vectorOf = notVectorOf;
module.exports = notType;
