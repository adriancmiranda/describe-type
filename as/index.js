'use strict';

var asType = require('./as.type.js');

var asAny = require('./as.any.js');

var asInstanceOf = require('./as.instanceOf.js');

var asVectorOf = require('./as.vectorOf.js');

asType.a = asType.an = asType.type = asType;
asType.any = asAny;
asType.instanceOf = asInstanceOf;
asType.vectorOf = asVectorOf;
module.exports = asType;
