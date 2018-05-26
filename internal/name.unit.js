import test from 'ava';
import Custom from '../.fixtures/datatype/types/custom';
import * as describeType from '../index.next';
import name from './name.next';

test('describeType.name exposure', (t) => {
	t.is(toString.call(describeType.name), '[object Function]', 'should be a function');
});

test('name exposure', (t) => {
	t.is(toString.call(name), '[object Function]', 'should be a function');
});

// 	test('Arguments', (t) => {
// 		t.is(name((() => arguments)()), 'Arguments');
// 	});

// 	test('String', (t) => {
// 		t.is(name(String), 'String');
// 	});

// 	test('RegExp', (t) => {
// 		t.is(name(RegExp), 'RegExp');
// 	});

// 	test('Number', (t) => {
// 		t.is(name(Number), 'Number');
// 	});

// 	test('TypeError', (t) => {
// 		t.is(name(TypeError), 'TypeError');
// 	});

// 	test('Error', (t) => {
// 		t.is(name(Error), 'Error');
// 	});

// 	test('Object', (t) => {
// 		t.is(name(Object), 'Object');
// 	});

// 	test('Array', (t) => {
// 		t.is(name(Array), 'Array');
// 	});

// 	test('Boolean', (t) => {
// 		t.is(name(Boolean), 'Boolean');
// 	});

// 	test('Date', (t) => {
// 		t.is(name(Date), 'Date');
// 	});

// 	test('null', (t) => {
// 		t.is(name(null), 'null');
// 	});

// 	test('undefined', (t) => {
// 		t.is(name(undefined), 'undefined');
// 	});

// 	test('NaN', (t) => {
// 		t.is(name(NaN), 'NaN');
// 	});

// 	test('_a_b|b_a_', (t) => {
// 		t.is(name('|a-b|b>a|', true), '_a_b|b_a_');
// 	});

// 	test('ab|ba', (t) => {
// 		t.is(name('ab|ba', true), 'ab|ba');
// 	});

// 	test('String', (t) => {
// 		t.is(name('ab|ba'), 'String');
// 	});

// 	test('Array', (t) => {
// 		t.is(name([1, 2]), 'Array');
// 	});

// 	test('RegExp', (t) => {
// 		t.is(name(/^./g), 'RegExp');
// 	});

// 	test('Number', (t) => {
// 		t.is(name(10000), 'Number');
// 	});

// 	test('Object', (t) => {
// 		t.is(name({ name: 1 }), 'Object');
// 	});

// 	test('Boolean', (t) => {
// 		t.is(name(false), 'Boolean');
// 	});

// 	test('Date', (t) => {
// 		t.is(name(new Date()), 'Date');
// 	});

// 	if (Custom.supportsCustomization) {
// 		test('FixtureTest', (t) => {
// 			t.is(name(new Custom('FixtureTest')), 'FixtureTest');
// 		});

// 		test('FixtureTest', (t) => {
// 			t.is(name(Custom), 'FixtureTest');
// 		});
// 	}

// 	if (global.Symbol) {
// 		test('Symbol', (t) => {
// 			t.is(name(global.Symbol), 'Symbol');
// 		});
// 	}

// 	if (global.Promise) {
// 		test('Promise', (t) => {
// 			t.is(name(global.Promise), 'Promise');
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		test('ArrayBuffer', (t) => {
// 			t.is(name(global.ArrayBuffer), 'ArrayBuffer');
// 		});

// 		test('ArrayBuffer', (t) => {
// 			t.is(name(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 		});
// 	}

// 	if (global.Int32Array && global.ArrayBuffer) {
// 		test('Int32Array', (t) => {
// 			t.is(name(new global.Int32Array(new global.ArrayBuffer(8))), 'Int32Array');
// 		});
// 	}

// 	if (global.Buffer) {
// 		test('Buffer', (t) => {
// 			t.is(name(global.Buffer), 'Buffer');
// 		});

// 		test('Buffer', (t) => {
// 			t.is(name(new global.Buffer('ab')), 'Buffer');
// 		});
// 	}
// });
