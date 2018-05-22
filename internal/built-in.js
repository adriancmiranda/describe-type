const { ObjectProto, StringProto } = require('./prototypes.js');

// built-in method(s)
exports.objectHasOwnProperty = ObjectProto.hasOwnProperty;
exports.objectToString = ObjectProto.toString;
exports.objectGetPrototypeOf = Object.getPrototypeOf;
exports.objectSupportsProto = StringProto === ''.__proto__;
