import test from 'ava';
import * as type from '../../../source';

test('foo', t => {
	t.pass();
});
// test('#stringOf', (t) => {
// 	it('exposed', (t) => {
// 		t.is(toString.call(type.stringOf), '[object Function]', 'should be a function');;
// 	});

// 	it('RegExp', (t) => {
// 		t.is(type.stringOf(/foo/), 'RegExp');
// 	});

// 	it('Function', (t) => {
// 		t.is(type.stringOf((t) => {}), 'Function');
// 	});

// 	it('Function', (t) => {
// 		t.is(type.stringOf((t) => {}, true), 'Function');
// 	});

// 	it('Function', (t) => {
// 		t.is(type.stringOf(function Test() {}), 'Function');
// 	});

// 	it('Function', (t) => {
// 		t.is(type.stringOf(function Test() {}, true), 'Function');
// 	});

// 	it('Test', (t) => {
// 		t.is(type.stringOf(new (function Test() {}), true), 'Test');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.stringOf(Object.create(null), true), 'Object');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.stringOf(Object.create(null)), 'Object');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.stringOf({}), 'Object');
// 	});

// 	it('Number', (t) => {
// 		t.is(type.stringOf(1), 'Number');
// 	});

// 	it('Date', (t) => {
// 		t.is(type.stringOf(new Date()), 'Date');
// 	});

// 	if (global.ArrayBuffer) {
// 		it('ArrayBuffer', (t) => {
// 			t.is(type.stringOf(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 		});
// 	}
// 	if (global.Buffer) {
// 		it('Buffer', (t) => {
// 			t.is(type.stringOf(new Buffer(3)), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		it('Promise', (t) => {
// 			t.is(type.stringOf(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });

