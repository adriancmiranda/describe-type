import test from 'ava';
import type from '../../';

test('typify', (t) => {
	t.is(toString.call(type.typify), '[object Function]');
	t.is(type.typify('Arguments', (() => arguments)()), 'Arguments');
	t.is(type.typify([Symbol, String, Function, Object, Boolean, Promise]), 'Symbol|String|Function|Object|Boolean|Promise');
	t.is(type.typify([Symbol, String, Function, Object, Boolean,]), 'Symbol|String|Function|Object|Boolean'); // should be 'Symbol|String|Function|Object|Boolean|Undefined'?
	t.is(type.typify('Symbol|String|Function|Object|Boolean', true), 'Symbol|String|Function|Object|Boolean');
	t.is(type.typify([1, []]), 'Number|Array');
	t.is(type.typify([1, 'Custom', {}]), 'Number|String|Object');
	t.is(type.typify([1, 'Custom', {}], true), 'Number|Custom|Object');
	t.is(type.typify('Custom', true), 'Custom');
	t.is(type.typify([]), 'Array');
	t.is(type.typify(1), 'Number');
	t.is(type.typify({}), 'Object');
	t.is(type.typify({ name: 1 }), 'Object');
	t.is(type.typify(/^./g), 'RegExp');
	t.is(type.typify(false), 'Boolean');
	t.is(type.typify(new Date()), 'Date');
	t.is(type.typify(Date), 'Date');
	t.is(type.typify(ArrayBuffer), 'ArrayBuffer');
	t.is(type.typify(new ArrayBuffer(4)), 'ArrayBuffer');
	t.is(type.typify(Buffer), 'Buffer');
	t.is(type.typify(new Buffer('ab')), 'Buffer');
	t.is(type.typify(new Promise((resolve) => { resolve(); })), 'Promise');
});
