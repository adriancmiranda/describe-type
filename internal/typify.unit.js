import test from 'ava';
import * as describeType from '../index.next.js';
import typify from './typify.next';

test('describeType.typify exposure', t => {
	t.is(toString.call(describeType.typify), '[object Function]', 'should be a function');
});

test('typify exposure', t => {
	t.is(toString.call(typify), '[object Function]', 'should be a function');
});

// 	test('Arguments', t => {
// 		t.is(typify((() => arguments)()), 'Arguments');
// 	});

// 	test('String|Function|Object|Boolean', t => {
// 		t.is(typify([String, Function, Object, Boolean]), 'String|Function|Object|Boolean');
// 	});

// 	test('String|Function|Object|Boolean', t => {
// 		t.is(typify([String, Function, Object, global.Boolean,]), 'String|Function|Object|Boolean'); // should be 'Symbol|String|Function|Object|Boolean|Undefined'?
// 	});

// 	test('Symbol|String|Function|Object|Boolean', t => {
// 		t.is(typify('Symbol|String|Function|Object|Boolean', true), 'Symbol|String|Function|Object|Boolean');
// 	});

// 	test('Number|Array', t => {
// 		t.is(typify([1, []]), 'Number|Array');
// 	});

// 	test('Number|String|Object', t => {
// 		t.is(typify([1, 'Custom', {}]), 'Number|String|Object');
// 	});

// 	test('Number', t => {
// 		t.is(typify([1, 'Custom', {}], true), 'Number|Custom|Object');
// 	});

// 	test('Custom', t => {
// 		t.is(typify('Custom', true), 'Custom');
// 	});

// 	test('Array', t => {
// 		t.is(typify([]), 'Array');
// 	});

// 	test('Number', t => {
// 		t.is(typify(1), 'Number');
// 	});

// 	test('Object', t => {
// 		t.is(typify({}), 'Object');
// 	});

// 	test('Object', t => {
// 		t.is(typify({ name: 1 }), 'Object');
// 	});

// 	test('RegExp', t => {
// 		t.is(typify(/^./g), 'RegExp');
// 	});

// 	test('Boolean', t => {
// 		t.is(typify(false), 'Boolean');
// 	});

// 	test('Date', t => {
// 		t.is(typify(new Date()), 'Date');
// 	});

// 	test('Date', t => {
// 		t.is(typify(Date), 'Date');
// 	});

// 	if (global.ArrayBuffer) {
// 		test('ArrayBuffer', t => {
// 			t.is(typify(global.ArrayBuffer), 'ArrayBuffer');
// 		});
// 	}

// 	test('ArrayBuffer', t => {
// 		t.is(typify(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 	});

// 	if (global.Buffer) {
// 		test('Buffer', t => {
// 			t.is(typify(global.Buffer), 'Buffer');
// 		});

// 		test('Buffer', t => {
// 			t.is(typify(new global.Buffer('ab')), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		test('Promise', t => {
// 			t.is(typify(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });
