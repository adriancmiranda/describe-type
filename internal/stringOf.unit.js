import test from 'ava';
import * as describeType from '../index.js';
import stringOf from '../../../internal/stringOf';

test('describeType.stringOf exposure', (t) => {
	t.is(toString.call(describeType.stringOf), '[object Function]', 'should be a function');
});

test('stringOf exposure', (t) => {
	t.is(toString.call(stringOf), '[object Function]', 'should be a function');
});

// 	test('RegExp', (t) => {
// 		t.is(stringOf(/foo/), 'RegExp');
// 	});

// 	test('Function', (t) => {
// 		t.is(stringOf((t) => {}), 'Function');
// 	});

// 	test('Function', (t) => {
// 		t.is(stringOf((t) => {}, true), 'Function');
// 	});

// 	test('Function', (t) => {
// 		t.is(stringOf(function Test() {}), 'Function');
// 	});

// 	test('Function', (t) => {
// 		t.is(stringOf(function Test() {}, true), 'Function');
// 	});

// 	test('Test', (t) => {
// 		t.is(stringOf(new (function Test() {}), true), 'Test');
// 	});

// 	test('Object', (t) => {
// 		t.is(stringOf(Object.create(null), true), 'Object');
// 	});

// 	test('Object', (t) => {
// 		t.is(stringOf(Object.create(null)), 'Object');
// 	});

// 	test('Object', (t) => {
// 		t.is(stringOf({}), 'Object');
// 	});

// 	test('Number', (t) => {
// 		t.is(stringOf(1), 'Number');
// 	});

// 	test('Date', (t) => {
// 		t.is(stringOf(new Date()), 'Date');
// 	});

// 	if (global.ArrayBuffer) {
// 		test('ArrayBuffer', (t) => {
// 			t.is(stringOf(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 		});
// 	}
// 	if (global.Buffer) {
// 		test('Buffer', (t) => {
// 			t.is(stringOf(new Buffer(3)), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		test('Promise', (t) => {
// 			t.is(stringOf(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });

