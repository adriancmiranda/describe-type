import test from 'ava';
import * as describeType from '.';

// console.log('type:', type);
console.log('describeType:', describeType.is);
test('describe-type exposure', t => {
	t.pass();
});

// test('describe-type exposure', t => {
// 	t.is(toString.call(describeType), '[object Object]');
// });

// test('describe-type/internal expusure', t => {
// 	const $global = toString.call(describeType.env);
// 	t.is(toString.call(describeType), '[object Object]');
// });

// test('describe-type/internal modules expusure', t => {
// 	const $global = toString.call(describeType.env);
// 	t.is($global === '[object global]' || $global === '[object Window]', true);
// 	t.is(toString.call(describeType.mod), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.polyfill.slice), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.polyfill.keys), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.apply), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.prototypes), '[object Object]');
// 	t.is(toString.call(describeType.prototypes.ObjectProto), '[object Object]');
// 	t.is(toString.call(describeType.builtIn), '[object Object]');
// 	t.is(toString.call(describeType.builtIn.objectGetPrototypeOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.builtIn.objectHasOwnProperty), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.builtIn.objectToString), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.patterns), '[object Object]');
// 	t.is(toString.call(describeType.patterns.reIsBase64), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reFunctionName), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reIsNativeFn), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reStringToBoolean), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reToPropName), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reIsHex), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reIsHexadecimal), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reIsJsonStart), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reEndsWithBracket), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reEndsWithBrace), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reIsJsonEnds), '[object Object]');
// 	t.is(toString.call(describeType.patterns.reIsJsonEnds['[']), '[object RegExp]');
// 	t.is(toString.call(describeType.patterns.reIsJsonEnds['{']), '[object RegExp]');
// 	t.is(toString.call(describeType.isBrowser), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.inBrowser), '[object Boolean]');
// 	t.is(toString.call(describeType.isNode), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.inNode), '[object Boolean]');
// });

// test('describe-type/internal expusure', t => {
// 	t.is(toString.call(describeType.booleanOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.constructorNameOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.constructorOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.floatOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.intOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.name), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.stringOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.typeOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.typify), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.uintOf), '[object Function]', 'should be a function');
// });

// test('describe-type/as expusure', t => {
// 	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.as.instanceOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.as.vectorOf), '[object Function]', 'should be a function');
// });

// test('describe-type/has expusure', t => {
// 	t.is(toString.call(describeType.has), '[object Object]');
// 	t.is(toString.call(describeType.has.unsafeMethod), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.has.ownProperty), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.has.ownValue), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.has.own), '[object Function]', 'should be a function');

// });

// test('describe-type/is expusure', t => {
// 	// console.log('describeType.is:', describeType.is);
// 	t.is(toString.call(describeType.is), '[object Object]');
// 	// maybe split to `describeType.not`
// 	t.is(toString.call(describeType.is.not), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.not.instanceOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.not.vectorOf), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.stream), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.stream.duplex), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.stream.readable), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.stream.writable), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.stream.transform), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.a), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.any), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.args), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.is.args.empty), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.array), '[object Function]', 'should be a function');
// 	// // t.is(toString.call(describeType.is.array.empty), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.arraylike), '[object Function]', 'should be a function');
// 	// // t.is(toString.call(describeType.is.arraylike.empty), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.base64), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.bool), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.buffer), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.callable), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.date), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.decimal), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.defined), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.element), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.empty), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.enumerable), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.equal), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.error), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.even), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.exotic), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.hex), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.hexadecimal), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.hosted), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.infinity), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.int), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.is.int.unsigned), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.is.integer), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.jsonlike), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.max), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.min), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.nan), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.nativeFunction), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.nil), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.number), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.numeric), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.object), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.odd), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.primitive), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.regexp), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.string), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.symbol), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.type), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.uint), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.is.uinteger), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.is.uInteger), '[object Function]', 'should be a function');
// 	// t.is(toString.call(describeType.is.unsignedInteger), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.undef), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.vector), '[object Function]', 'should be a function');
// 	t.is(toString.call(describeType.is.within), '[object Function]', 'should be a function');
// });

// test('describe-type/schema expusure', t => {
// 	t.is(toString.call(describeType.schema), '[object Function]', 'should be a function');
// });
