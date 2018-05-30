import test from 'ava';
import colors from 'colors';
import * as describeType from './index.next';
import * as polyfill from './polyfill/index.next';
import * as shim from './shim/index.next';

function deleteAt(object, property) {
	if (object == null) return object;
	const value = object[property];
	delete object[property];
	return value;
}

test(`${colors.underline('describeType')} exposure`, (t) => {
	t.is(toString.call(describeType), '[object Object]', '"describeType" should be an object');
	// t.is(toString.call(describeType.default), '[object Object]', '"describeType.default" should be an object');
	// const describeTypeDefault = describeType.default;
	// const describeTypeWithoutDefault = deleteAt(describeType, 'default');
	// t.deepEqual(describeTypeWithoutDefault, describeTypeDefault, '"describeType.default" should be exactly equal to "describeType"');
	// describeType.default = describeTypeDefault;
});

test(`${colors.underline('describeType.env')} expusure`, (t) => {
	const $global = toString.call(describeType.env);
	t.is(toString.call(describeType.env), '[object global]', '"describeType.env" should be global');
	t.is(toString.call(describeType.env.window), '[object Window]', 'The module "browser-env" should expose the window on global scope');
	t.is(describeType.inBrowser, false, '"describeType.inBrowser" should be false');
	t.is(describeType.inNode, true, '"describeType.inNode" should be true');
});

test(`${colors.underline('describeType.as')} exposure`, (t) => {
	t.is(toString.call(describeType.as), '[object Function]', '"describeType.as" should be a function');
	t.is(toString.call(describeType.as.type), '[object Function]', '"describeType.as.type" should be a function');
	t.deepEqual(describeType.as.a, describeType.as.type, '"describeType.as.a" should be a alias to "describeType.as.type"');
	t.deepEqual(describeType.as.an, describeType.as.type, '"describeType.as.an" should be a alias to "describeType.as.type"');
	t.is(toString.call(describeType.as.any), '[object Function]', '"describeType.as.any" should be a function');
	t.is(toString.call(describeType.as.instanceOf), '[object Function]', '"describeType.as.instanceOf" should be a function');
	t.is(toString.call(describeType.as.vectorOf), '[object Function]', '"describeType.as.vectorOf" should be a function');
});

test(`${colors.underline('describeType.has')} expusure`, (t) => {
	t.is(toString.call(describeType.has), '[object Object]', '"describeType.has" should be a object');
	t.is(toString.call(describeType.has.unsafeMethod), '[object Function]', '"describeType.has.unsafeMethod" should be a function');
	t.is(toString.call(describeType.has.ownProperty), '[object Function]', '"describeType.has.ownProperty" should be a function');
	t.is(toString.call(describeType.has.ownValue), '[object Function]', '"describeType.has.ownValue" should be a function');
	t.is(toString.call(describeType.has.own), '[object Function]', '"describeType.has.own" should be a function');
	t.is(toString.call(describeType.has.at), '[object Function]', '"describeType.has.at" should be a function');
});

test(`${colors.underline('describeType.is')} expusure`, (t) => {
	t.is(toString.call(describeType.is), '[object Object]', '"describeType.is" should be a object');
	t.is(toString.call(describeType.is.type), '[object Function]', '"describeType.is.type" should be a function');
	// t.deepEqual(describeType.is.a, describeType.is.type, '"describeType.is.a" should be a alias to "describeType.is.type"');
	// t.deepEqual(describeType.is.an, describeType.is.type, '"describeType.is.an" should be a alias to "describeType.is.type"');
	t.is(toString.call(describeType.is.base64), '[object Function]', '"describeType.is.base64" should be a function');
	t.is(toString.call(describeType.is.bool), '[object Function]', '"describeType.is.bool" should be a function');
	t.is(toString.call(describeType.is.buffer), '[object Function]', '"describeType.is.buffer" should be a function');
	t.is(toString.call(describeType.is.callable), '[object Function]', '"describeType.is.callable" should be a function');
	t.is(toString.call(describeType.is.date), '[object Function]', '"describeType.is.date" should be a function');
	t.is(toString.call(describeType.is.decimal), '[object Function]', '"describeType.is.decimal" should be a function');
	t.is(toString.call(describeType.is.defined), '[object Function]', '"describeType.is.defined" should be a function');
	t.is(toString.call(describeType.is.element), '[object Function]', '"describeType.is.element" should be a function');
	t.is(toString.call(describeType.is.empty), '[object Function]', '"describeType.is.empty" should be a function');
	t.is(toString.call(describeType.is.enumerable), '[object Function]', '"describeType.is.enumerable" should be a function');
	t.is(toString.call(describeType.is.equal), '[object Function]', '"describeType.is.equal" should be a function');
	t.is(toString.call(describeType.is.error), '[object Function]', '"describeType.is.error" should be a function');
	t.is(toString.call(describeType.is.even), '[object Function]', '"describeType.is.even" should be a function');
	t.is(toString.call(describeType.is.exotic), '[object Function]', '"describeType.is.exotic" should be a function');
	t.is(toString.call(describeType.is.hex), '[object Function]', '"describeType.is.hex" should be a function');
	t.is(toString.call(describeType.is.hexadecimal), '[object Function]', '"describeType.is.hexadecimal" should be a function');
	t.is(toString.call(describeType.is.hosted), '[object Function]', '"describeType.is.hosted" should be a function');
	t.is(toString.call(describeType.is.infinity), '[object Function]', '"describeType.is.infinity" should be a function');
	t.is(toString.call(describeType.is.instanceOf), '[object Function]', '"describeType.is.instanceOf" should be a function');
	t.is(toString.call(describeType.is.int), '[object Function]', '"describeType.is.int" should be a function');
	t.is(toString.call(describeType.is.jsonlike), '[object Function]', '"describeType.is.jsonlike" should be a function');
	t.is(toString.call(describeType.is.max), '[object Function]', '"describeType.is.max" should be a function');
	t.is(toString.call(describeType.is.min), '[object Function]', '"describeType.is.min" should be a function');
	t.is(toString.call(describeType.is.nan), '[object Function]', '"describeType.is.nan" should be a function');
	t.is(toString.call(describeType.is.nativeFunction), '[object Function]', '"describeType.is.nativeFunction" should be a function');
	t.is(toString.call(describeType.is.nil), '[object Function]', '"describeType.is.nil" should be a function');
	t.is(toString.call(describeType.is.number), '[object Function]', '"describeType.is.number" should be a function');
	t.is(toString.call(describeType.is.numeric), '[object Function]', '"describeType.is.numeric" should be a function');
	t.is(toString.call(describeType.is.odd), '[object Function]', '"describeType.is.odd" should be a function');
	t.is(toString.call(describeType.is.primitive), '[object Function]', '"describeType.is.primitive" should be a function');
	t.is(toString.call(describeType.is.regexp), '[object Function]', '"describeType.is.regexp" should be a function');
	t.is(toString.call(describeType.is.symbol), '[object Function]', '"describeType.is.symbol" should be a function');
	t.is(toString.call(describeType.is.uint), '[object Function]', '"describeType.is.uint" should be a function');
	t.is(toString.call(describeType.is.undef), '[object Function]', '"describeType.is.undef" should be a function');
	t.is(toString.call(describeType.is.vector), '[object Function]', '"describeType.is.vector" should be a function');
	t.is(toString.call(describeType.is.within), '[object Function]', '"describeType.is.within" should be a function');
});

test(`${colors.underline('describeType.is.args')} expusure`, (t) => {
	t.is(toString.call(describeType.is.args), '[object Function]', '"describeType.is.args" should be a function');
	t.is(toString.call(describeType.is.args.empty), '[object Function]', '"describeType.is.args.empty" should be a function');
});

test(`${colors.underline('describeType.is.array')} expusure`, (t) => {
	t.is(toString.call(describeType.is.array), '[object Function]', '"describeType.is.array" should be a function');
	t.is(toString.call(describeType.is.array.empty), '[object Function]', '"describeType.is.array.empty" should be a function');
});

test(`${colors.underline('describeType.is.arraylike')} expusure`, (t) => {
	t.is(toString.call(describeType.is.arraylike), '[object Function]', '"describeType.is.arraylike" should be a function');
	t.is(toString.call(describeType.is.arraylike.empty), '[object Function]', '"describeType.is.arraylike.empty" should be a function');
});

test(`${colors.underline('describeType.is.not')} expusure`, (t) => {
	t.is(toString.call(describeType.is.not), '[object Function]', '"describeType.is.not" should be a function');
	t.is(toString.call(describeType.is.not.type), '[object Function]', '"describeType.is.not.type" should be a function');
	t.deepEqual(describeType.is.not.a, describeType.is.not.type, '"describeType.is.not.a" should be a alias to "describeType.is.not.type"');
	t.deepEqual(describeType.is.not.an, describeType.is.not.type, '"describeType.is.not.an" should be a alias to "describeType.is.not.type"');
	t.is(toString.call(describeType.is.not.any), '[object Function]', '"describeType.is.not.any" should be a function');
	t.is(toString.call(describeType.is.not.instanceOf), '[object Function]', '"describeType.is.not.instanceOf" should be a function');
	t.is(toString.call(describeType.is.not.vectorOf), '[object Function]', '"describeType.is.not.vectorOf" should be a function');
});

test(`${colors.underline('describeType.is.object')} expusure`, (t) => {
	t.is(toString.call(describeType.is.object), '[object Function]', '"describeType.is.object" should be a function');
	t.is(toString.call(describeType.is.object.empty), '[object Function]', '"describeType.is.object.empty" should be a function');
});

test(`${colors.underline('describeType.is.stream')} expusure`, (t) => {
	t.is(toString.call(describeType.is.stream), '[object Function]', '"describeType.is.stream" should be a function');
	t.is(toString.call(describeType.is.stream.writable), '[object Function]', '"describeType.is.stream.writable" should be a function');
	t.is(toString.call(describeType.is.stream.readable), '[object Function]', '"describeType.is.stream.readable" should be a function');
	t.is(toString.call(describeType.is.stream.duplex), '[object Function]', '"describeType.is.stream.duplex" should be a function');
	t.is(toString.call(describeType.is.stream.transform), '[object Function]', '"describeType.is.stream.transform" should be a function');
});

test(`${colors.underline('describeType.is.string')} expusure`, (t) => {
	t.is(toString.call(describeType.is.string), '[object Function]', '"describeType.is.string" should be a function');
	t.is(toString.call(describeType.is.string.empty), '[object Function]', '"describeType.is.string.empty" should be a function');
});

test(`${colors.underline('describeType.schema')} expusure`, (t) => {
	t.is(toString.call(describeType.schema), '[object Function]', '"describeType.schema" should be a function');
});

test(`${colors.underline('describeType built-in')} expusures`, (t) => {
	t.is(toString.call(describeType.stringOf), '[object Function]', '"describeType.stringOf" should be a function');
	t.is(toString.call(describeType.booleanOf), '[object Function]', '"describeType.booleanOf" should be a function');
	t.is(toString.call(describeType.floatOf), '[object Function]', '"describeType.floatOf" should be a function');
	t.is(toString.call(describeType.intOf), '[object Function]', '"describeType.intOf" should be a function');
	t.is(toString.call(describeType.uintOf), '[object Function]', '"describeType.uintOf" should be a function');
	t.is(toString.call(describeType.constructorNameOf), '[object Function]', '"describeType.constructorNameOf" should be a function');
	t.is(toString.call(describeType.constructorOf), '[object Function]', '"describeType.constructorOf" should be a function');
	t.is(toString.call(describeType.typeOf), '[object Function]', '"describeType.typeOf" should be a function');
	t.is(toString.call(describeType.typify), '[object Function]', '"describeType.typify" should be a function');
	t.is(toString.call(describeType.name), '[object Function]', '"describeType.name" should be a function');
	t.is(toString.call(describeType.apply), '[object Function]', '"describeType.apply" should be a function');
	t.is(toString.call(describeType.getExpectedValue), '[object Function]', '"describeType.getExpectedValue" should be a function');
	t.is(toString.call(describeType.mod), '[object Function]', '"describeType.mod" should be a function');
	t.is(toString.call(describeType.stringify), '[object Function]', '"describeType.stringify" should be a function');
});

test(`${colors.underline('describeType built-in / each family')} expusures`, (t) => {
	t.is(toString.call(describeType.each), '[object Function]', '"each" should be a function');
	t.is(toString.call(describeType.eachValue), '[object Function]', '"eachValue" should be a function');
	t.is(toString.call(describeType.eachProperty), '[object Function]', '"eachProperty" should be a function');
	t.is(toString.call(describeType.resolveProperty), '[object Function]', '"resolveProperty" should be a function');
});

test(`${colors.underline('describeType built-in / prototypes')} expusures`, (t) => {
	t.is(toString.call(describeType.prototypes), '[object Object]', '"prototypes" should be a object');
	t.deepEqual(describeType.prototypes.ObjectProto, Object.prototype, '"describeType.prototypes.ObjectProto" should be strictly equal to "Object.prototype"');
	t.deepEqual(describeType.prototypes.ArrayProto, Array.prototype, '"describeType.prototypes.ArrayProto" should be strictly equal to "Object.prototype"');
	t.deepEqual(describeType.prototypes.StringProto, String.prototype, '"describeType.prototypes.StringProto" should be strictly equal to "Object.prototype"');
});

test(`${colors.underline('describeType built-in / builtIn')} expusures`, (t) => {
	t.is(toString.call(describeType.builtIn), '[object Object]', '"builtIn" should be a object');
	t.deepEqual(describeType.builtIn.objectHasOwnProperty, Object.prototype.hasOwnProperty, '"describeType.builtIn.objectHasOwnProperty" should be strictly equal to "Object.prototype.hasOwnProperty"');
	t.deepEqual(describeType.builtIn.objectToString, Object.prototype.toString, '"describeType.builtIn.objectToString" should be strictly equal to "Object.prototype.toString"');
	// t.deepEqual(describeType.builtIn.objectGetPrototypeOf, Object.getPrototypeOf, '"describeType.builtIn.objectGetPrototypeOf" should be strictly equal to "Object.getPrototypeOf"');
	t.deepEqual(toString.call(describeType.builtIn.objectSupportsProto), '[object Boolean]', '"describeType.builtIn.objectSupportsProto" should be a boolean');
});

test(`${colors.underline('describeType built-in / patterns')} expusures`, (t) => {
	t.is(toString.call(describeType.patterns), '[object Object]', '"patterns" should be a object');
	t.is(toString.call(describeType.patterns.reIsBase64), '[object RegExp]', '"describeType.reIsBase64" should be a regexp');
	t.is(toString.call(describeType.patterns.reFunctionName), '[object RegExp]', '"describeType.reFunctionName" should be a regexp');
	t.is(toString.call(describeType.patterns.reIsNativeFn), '[object RegExp]', '"describeType.reIsNativeFn" should be a regexp');
	t.is(toString.call(describeType.patterns.reStringToBoolean), '[object RegExp]', '"describeType.reStringToBoolean" should be a regexp');
	t.is(toString.call(describeType.patterns.reToPropName), '[object RegExp]', '"describeType.reToPropName" should be a regexp');
	t.is(toString.call(describeType.patterns.reIsHex), '[object RegExp]', '"describeType.reIsHex" should be a regexp');
	t.is(toString.call(describeType.patterns.reIsHexadecimal), '[object RegExp]', '"describeType.reIsHexadecimal" should be a regexp');
	t.is(toString.call(describeType.patterns.reIsJsonStart), '[object RegExp]', '"describeType.reIsJsonStart" should be a regexp');
	t.is(toString.call(describeType.patterns.reEndsWithBracket), '[object RegExp]', '"describeType.reEndsWithBracket" should be a regexp');
	t.is(toString.call(describeType.patterns.reEndsWithBrace), '[object RegExp]', '"describeType.reEndsWithBrace" should be a regexp');
	t.is(toString.call(describeType.patterns.reIsJsonEnds), '[object Object]', '"describeType.reIsJsonEnds" should be an object');
	t.is(toString.call(describeType.patterns.reIsJsonEnds['[']), '[object RegExp]', '"describeType.reIsJsonEnds[\'[\']" should be a regexp');
	t.is(toString.call(describeType.patterns.reIsJsonEnds['{']), '[object RegExp]', '"describeType.reIsJsonEnds[\'{\']" should be a regexp');
});

test(`${colors.underline('describeType built-in / constants')} expusures`, (t) => {
	t.is(toString.call(describeType.constants), '[object Object]', '"describeType.constants" should be a object');
	t.is(describeType.constants.NUMBER, 'number', '"describeType.constants.NUMBER" should be "number"');
	t.is(describeType.constants.BOOLEAN, 'boolean', '"describeType.constants.BOOLEAN" should be "boolean"');
	t.is(describeType.constants.STRING, 'string', '"describeType.constants.STRING" should be "string"');
	t.is(describeType.constants.SYMBOL, 'symbol', '"describeType.constants.SYMBOL" should be "symbol"');
	t.is(describeType.constants.OBJECT, 'object', '"describeType.constants.OBJECT" should be "object"');
	t.is(describeType.constants.FUNCTION, 'function', '"describeType.constants.FUNCTION" should be "function"');
	t.is(describeType.constants.NULL, 'null', '"describeType.constants.NULL" should be "null"');
	t.is(describeType.constants.UNDEFINED, 'undefined', '"describeType.constants.UNDEFINED" should be "undefined"');
	t.is(describeType.constants.GENERATOR_FUNCTION, 'GeneratorFunction', '"describeType.constants.GENERATOR_FUNCTION" should be "GeneratorFunction"');
	t.is(describeType.constants.ASYNC_FUNCTION, 'AsyncFunction', '"describeType.constants.ASYNC_FUNCTION" should be "AsyncFunction"');
	t.is(describeType.constants.ARGUMENTS, 'Arguments', '"describeType.constants.ARGUMENTS" should be "Arguments"');
	t.is(describeType.constants.INFINITY, 'Infinity', '"describeType.constants.INFINITY" should be "Infinity"');
	t.is(describeType.constants.NAN, 'NaN', '"describeType.constants.NAN" should be "NaN"');
	t.is(describeType.constants.CONSTRUCTOR, 'constructor', '"describeType.constants.CONSTRUCTOR" should be "constructor"');
	t.is(describeType.constants.PREFIX_SEAL, '[object ', '"describeType.constants.PREFIX_SEAL" should be "[object "');
	t.is(describeType.constants.ARGUMENTS_SEAL, '[object Arguments]', '"describeType.constants.ARGUMENTS_SEAL" should be "[object Arguments]"');
	t.is(describeType.constants.CALLEE, 'callee', '"describeType.constants.CALLEE" should be "callee"');
});

test(`${colors.underline('describeType polyfill')} expusures`, (t) => {
	t.is(toString.call(polyfill.filter), '[object Function]', '"polyfill.filter" should be a function');
	t.is(toString.call(polyfill.reduce), '[object Function]', '"polyfill.reduce" should be a function');
	t.is(toString.call(polyfill.slice), '[object Function]', '"polyfill.slice" should be a function');
	t.is(toString.call(polyfill.assign), '[object Function]', '"polyfill.assign" should be a function');
	t.is(toString.call(polyfill.create), '[object Function]', '"polyfill.create" should be a function');
	t.is(toString.call(polyfill.is), '[object Function]', '"polyfill.is" should be a function');
	t.is(toString.call(polyfill.keys), '[object Function]', '"polyfill.keys" should be a function');
	t.is(toString.call(polyfill.startsWith), '[object Function]', '"polyfill.startsWith" should be a function');
});

test(`${colors.underline('describeType shim')} expusures`, (t) => {
	t.is(toString.call(shim.getPrototypeOf), '[object Function]', '"shim.getPrototypeOf" should be a function');
});
