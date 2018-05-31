const { ObjectProto, StringProto, SymbolProto } = require('./prototypes.js');

// built-in method(s)
exports.objectHasOwnProperty = ObjectProto.hasOwnProperty;
exports.objectToString = ObjectProto.toString;
exports.objectSupportsProto = StringProto === ''.__proto__;
exports.symbolToString = SymbolProto ? SymbolProto.toString : undefined;
