const { ObjectProto, StringProto } = require('./prototypes.js');

// built-in method(s)
exports.objectHasOwnProperty = ObjectProto.hasOwnProperty;
exports.objectToString = ObjectProto.toString;
exports.objectSupportsProto = StringProto === ''.__proto__;
