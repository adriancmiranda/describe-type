'use strict';

var _prototypesJs = require('./prototypes.js');

var ObjectProto = _prototypesJs.ObjectProto;
var StringProto = _prototypesJs.StringProto;


// built-in method(s)
var objectHasOwnProperty = exports.objectHasOwnProperty = ObjectProto.hasOwnProperty;
var objectToString = exports.objectToString = ObjectProto.toString;
var objectGetPrototypeOf = exports.objectGetPrototypeOf = Object.getPrototypeOf;
var objectSupportsProto = exports.objectSupportsProto = StringProto === ''.__proto__;
