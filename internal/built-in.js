const { ObjectProto, SymbolProto } = require('./prototypes.js');

// built-in method(s)
exports.objectHasOwnProperty = ObjectProto.hasOwnProperty;
exports.objectToString = ObjectProto.toString;
exports.symbolToString = SymbolProto ? SymbolProto.toString : undefined;
