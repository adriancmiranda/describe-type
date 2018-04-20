import test from 'ava';
import * as describeType from '../../source';
import './is';

test('describe-type exposure', t => {
	t.is(toString.call(describeType), '[object Object]');
});

test('describe-type/@ expusure', t => {
	t.is(toString.call(describeType.internal), '[object Object]');
	t.is(toString.call(describeType.internal.mod), '[object Function]');
	t.is(toString.call(describeType.internal.slice), '[object Function]');
	t.is(toString.call(describeType.internal.keys), '[object Function]');
	t.is(toString.call(describeType.internal.apply), '[object Function]');
	t.is(toString.call(describeType.internal.prototypes), '[object Object]');
	t.is(toString.call(describeType.internal.prototypes.ObjectProto), '[object Object]');
	t.is(toString.call(describeType.internal.builtIn), '[object Object]');
	t.is(toString.call(describeType.internal.builtIn.objectHasOwnProperty), '[object Function]');
	t.is(toString.call(describeType.internal.builtIn.objectToString), '[object Function]');
	t.is(toString.call(describeType.internal.patterns), '[object Object]');
	t.is(toString.call(describeType.internal.patterns.reIsBase64), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reFunctionName), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reIsNativeFn), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reStringToBoolean), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reToPropName), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reIsHex), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reIsHexadecimal), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reIsJsonStart), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reEndsWithBracket), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reEndsWithBrace), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reIsJsonEnds), '[object Object]');
	t.is(toString.call(describeType.internal.patterns.reIsJsonEnds['[']), '[object RegExp]');
	t.is(toString.call(describeType.internal.patterns.reIsJsonEnds['{']), '[object RegExp]');
	t.is(toString.call(describeType.internal.isBrowser), '[object Function]');
	t.is(toString.call(describeType.internal.inBrowser), '[object Boolean]');
	t.is(toString.call(describeType.internal.isNode), '[object Function]');
	t.is(toString.call(describeType.internal.inNode), '[object Boolean]');
	t.is(toString.call(describeType.internal.env), '[object global]');
});

test('describe-type/as expusure', t => {
	t.is(toString.call(describeType.as), '[object Function]');
	// t.is(toString.call(describeType.as.instanceOf), '[object Function]');
	// t.is(toString.call(describeType.as.vectorOf), '[object Function]');
});

test('describe-type/built-in expusure', t => {
	t.is(toString.call(describeType.booleanOf), '[object Function]');
	t.is(toString.call(describeType.constructorNameOf), '[object Function]');
	t.is(toString.call(describeType.constructorOf), '[object Function]');
	t.is(toString.call(describeType.floatOf), '[object Function]');
	t.is(toString.call(describeType.intOf), '[object Function]');
	t.is(toString.call(describeType.name), '[object Function]');
	t.is(toString.call(describeType.stringOf), '[object Function]');
	t.is(toString.call(describeType.typeOf), '[object Function]');
	t.is(toString.call(describeType.typify), '[object Function]');
	t.is(toString.call(describeType.uintOf), '[object Function]');
});

test('describe-type/has expusure', t => {
	t.is(toString.call(describeType.has), '[object Object]');
	t.is(toString.call(describeType.has.unsafeMethod), '[object Function]');
	t.is(toString.call(describeType.has.ownProperty), '[object Function]');
	t.is(toString.call(describeType.has.ownValue), '[object Function]');
	t.is(toString.call(describeType.has.own), '[object Function]');

});

test('describe-type/is expusure', t => {
	// console.log('describeType.is:', describeType.is);
	t.is(toString.call(describeType.is), '[object Object]');
	t.is(toString.call(describeType.is.a), '[object Function]');
	t.is(toString.call(describeType.is.any), '[object Function]');
	t.is(toString.call(describeType.is.args), '[object Function]');
	t.is(toString.call(describeType.is.array), '[object Function]');
	// t.is(toString.call(describeType.is.array.empty), '[object Function]');
	t.is(toString.call(describeType.is.arraylike), '[object Function]');
	// t.is(toString.call(describeType.is.arraylike.empty), '[object Function]');
	t.is(toString.call(describeType.is.base64), '[object Function]');
	t.is(toString.call(describeType.is.bool), '[object Function]');
	t.is(toString.call(describeType.is.buffer), '[object Function]');
	t.is(toString.call(describeType.is.callable), '[object Function]');
	t.is(toString.call(describeType.is.date), '[object Function]');
	t.is(toString.call(describeType.is.decimal), '[object Function]');
	t.is(toString.call(describeType.is.element), '[object Function]');
	t.is(toString.call(describeType.is.empty), '[object Function]');
	t.is(toString.call(describeType.is.enumerable), '[object Function]');
	t.is(toString.call(describeType.is.equal), '[object Function]');
	t.is(toString.call(describeType.is.error), '[object Function]');
	t.is(toString.call(describeType.is.even), '[object Function]');
	t.is(toString.call(describeType.is.exotic), '[object Function]');
	t.is(toString.call(describeType.is.hex), '[object Function]');
	t.is(toString.call(describeType.is.hexadecimal), '[object Function]');
	t.is(toString.call(describeType.is.hosted), '[object Function]');
	t.is(toString.call(describeType.is.infinity), '[object Function]');
	t.is(toString.call(describeType.is.int), '[object Function]');
	// t.is(toString.call(describeType.is.integer), '[object Function]');
	t.is(toString.call(describeType.is.jsonlike), '[object Function]');
	t.is(toString.call(describeType.is.max), '[object Function]');
	t.is(toString.call(describeType.is.min), '[object Function]');
	t.is(toString.call(describeType.is.nan), '[object Function]');
	t.is(toString.call(describeType.is.nativeFunction), '[object Function]');
	t.is(toString.call(describeType.is.nil), '[object Function]');
	t.is(toString.call(describeType.is.not), '[object Function]');
	// t.is(toString.call(describeType.is.not.instanceOf), '[object Function]');
	// t.is(toString.call(describeType.is.not.vectorOf), '[object Function]');
	t.is(toString.call(describeType.is.number), '[object Function]');
	t.is(toString.call(describeType.is.numeric), '[object Function]');
	t.is(toString.call(describeType.is.object), '[object Function]');
	t.is(toString.call(describeType.is.odd), '[object Function]');
	t.is(toString.call(describeType.is.primitive), '[object Function]');
	t.is(toString.call(describeType.is.regexp), '[object Function]');
	t.is(toString.call(describeType.is.stream), '[object Function]');
	// t.is(toString.call(describeType.is.stream.duplex), '[object Function]');
	// t.is(toString.call(describeType.is.stream.readable), '[object Function]');
	// t.is(toString.call(describeType.is.stream.writable), '[object Function]');
	// t.is(toString.call(describeType.is.stream.transform), '[object Function]');
	t.is(toString.call(describeType.is.string), '[object Function]');
	t.is(toString.call(describeType.is.symbol), '[object Function]');
	t.is(toString.call(describeType.is.uint), '[object Function]');
	// t.is(toString.call(describeType.is.int.unsigned), '[object Function]');
	// t.is(toString.call(describeType.is.uinteger), '[object Function]');
	// t.is(toString.call(describeType.is.uInteger), '[object Function]');
	// t.is(toString.call(describeType.is.unsignedInteger), '[object Function]');
	t.is(toString.call(describeType.is.undef), '[object Function]');
	t.is(toString.call(describeType.is.vector), '[object Function]');
	t.is(toString.call(describeType.is.within), '[object Function]');
});

test('describe-type/schema expusure', t => {
	t.is(toString.call(describeType.schema), '[object Function]');
});
