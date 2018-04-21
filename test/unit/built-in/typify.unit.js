import test from 'ava';
import * as type from '../../../source';

test('foo', t => {
	t.pass();
});
// test('#typify', (t) => {
// 	it('exposed', (t) => {
// 		t.is(toString.call(type.typify), '[object Function]');
// 	});

// 	it('Arguments', (t) => {
// 		t.is(type.typify((() => arguments)()), 'Arguments');
// 	});

// 	it('String|Function|Object|Boolean', (t) => {
// 		t.is(type.typify([String, Function, Object, Boolean]), 'String|Function|Object|Boolean');
// 	});

// 	it('String|Function|Object|Boolean', (t) => {
// 		t.is(type.typify([String, Function, Object, global.Boolean,]), 'String|Function|Object|Boolean'); // should be 'Symbol|String|Function|Object|Boolean|Undefined'?
// 	});

// 	it('Symbol|String|Function|Object|Boolean', (t) => {
// 		t.is(type.typify('Symbol|String|Function|Object|Boolean', true), 'Symbol|String|Function|Object|Boolean');
// 	});

// 	it('Number|Array', (t) => {
// 		t.is(type.typify([1, []]), 'Number|Array');
// 	});

// 	it('Number|String|Object', (t) => {
// 		t.is(type.typify([1, 'Custom', {}]), 'Number|String|Object');
// 	});

// 	it('Number', (t) => {
// 		t.is(type.typify([1, 'Custom', {}], true), 'Number|Custom|Object');
// 	});

// 	it('Custom', (t) => {
// 		t.is(type.typify('Custom', true), 'Custom');
// 	});

// 	it('Array', (t) => {
// 		t.is(type.typify([]), 'Array');
// 	});

// 	it('Number', (t) => {
// 		t.is(type.typify(1), 'Number');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.typify({}), 'Object');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.typify({ name: 1 }), 'Object');
// 	});

// 	it('RegExp', (t) => {
// 		t.is(type.typify(/^./g), 'RegExp');
// 	});

// 	it('Boolean', (t) => {
// 		t.is(type.typify(false), 'Boolean');
// 	});

// 	it('Date', (t) => {
// 		t.is(type.typify(new Date()), 'Date');
// 	});

// 	it('Date', (t) => {
// 		t.is(type.typify(Date), 'Date');
// 	});

// 	if (global.ArrayBuffer) {
// 		it('ArrayBuffer', (t) => {
// 			t.is(type.typify(global.ArrayBuffer), 'ArrayBuffer');
// 		});
// 	}

// 	it('ArrayBuffer', (t) => {
// 		t.is(type.typify(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 	});

// 	if (global.Buffer) {
// 		it('Buffer', (t) => {
// 			t.is(type.typify(global.Buffer), 'Buffer');
// 		});

// 		it('Buffer', (t) => {
// 			t.is(type.typify(new global.Buffer('ab')), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		it('Promise', (t) => {
// 			t.is(type.typify(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });
