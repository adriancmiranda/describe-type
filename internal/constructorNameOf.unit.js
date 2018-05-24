import test from 'ava';
import Custom from '../../.fixtures/datatype/types/custom';
import * as describeType from '../index.next.js';
import constructorNameOf from './constructorNameOf.next';

test('describeType.constructorNameOf exposure', t => {
	t.is(toString.call(describeType.constructorNameOf), '[object Function]', 'should be a function');
});

test('constructorNameOf exposure', t => {
	t.is(toString.call(constructorNameOf), '[object Function]', 'should be a function');
});

// 	test('exposed', t => {
// 		t.is(toString.call(constructorNameOf), '[object Function]', 'should be a function');
// 	});

// 	test('Arguments', t => {
// 		t.is(constructorNameOf((() => arguments)()), 'Arguments');
// 	});

// 	test('Function', t => {
// 		t.is(constructorNameOf(() => 'foo'), 'Function');
// 	});

// 	test('Function', t => {
// 		t.is(constructorNameOf(t => { return 'foo'; }), 'Function');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(String), 'String');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(String.name), 'String');
// 	});

// 	test('RegExp', t => {
// 		t.is(constructorNameOf(RegExp), 'RegExp');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(RegExp.name), 'String');
// 	});

// 	test('Number', t => {
// 		t.is(constructorNameOf(Number), 'Number');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(Number.name), 'String');
// 	});

// 	test('TypeError', t => {
// 		t.is(constructorNameOf(TypeError), 'TypeError');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(TypeError.name), 'String');
// 	});

// 	test('Error', t => {
// 		t.is(constructorNameOf(Error), 'Error');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(Error.name), 'String');
// 	});

// 	test('Object', t => {
// 		t.is(constructorNameOf(Object), 'Object');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(Object.name), 'String');
// 	});

// 	test('Array', t => {
// 		t.is(constructorNameOf(Array), 'Array');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(Array.name), 'String');
// 	});

// 	test('Boolean', t => {
// 		t.is(constructorNameOf(Boolean), 'Boolean');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(Boolean.name), 'String');
// 	});

// 	test('Date', t => {
// 		t.is(constructorNameOf(Date), 'Date');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(Date.name), 'String');
// 	});

// 	test('null', t => {
// 		t.is(constructorNameOf(null), 'null');
// 	});

// 	test('undefined', t => {
// 		t.is(constructorNameOf(undefined), 'undefined');
// 	});

// 	test('Infinity', t => {
// 		t.is(constructorNameOf(Infinity), 'Infinity');
// 	});

// 	test('NaN', t => {
// 		t.is(constructorNameOf(NaN), 'NaN');
// 	});

// 	test('undefined', t => {
// 		t.is(constructorNameOf(NaN.name), 'undefined');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf('ab|ba'), 'String');
// 	});

// 	test('Custom', t => {
// 		t.is(constructorNameOf(new Custom()), 'Custom');
// 	});

// 	test('Custom', t => {
// 		t.is(constructorNameOf(Custom), 'Custom');
// 	});

// 	test('String', t => {
// 		t.is(constructorNameOf(Custom.name), 'String');
// 	});

// 	test('Array', t => {
// 		t.is(constructorNameOf([1, 2]), 'Array');
// 	});

// 	test('RegExp', t => {
// 		t.is(constructorNameOf(/^./g), 'RegExp');
// 	});

// 	test('Number', t => {
// 		t.is(constructorNameOf(10000), 'Number');
// 	});

// 	test('Object', t => {
// 		t.is(constructorNameOf({ name: 1 }), 'Object');
// 	});

// 	test('Boolean', t => {
// 		t.is(constructorNameOf(false), 'Boolean');
// 	});

// 	test('Date', t => {
// 		t.is(constructorNameOf(new Date()), 'Date');
// 	});

// 	if (global.Symbol) {
// 		test('Symbol', t => {
// 			t.is(constructorNameOf(global.Symbol), 'Symbol');
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		test('ArrayBuffer', t => {
// 			t.is(constructorNameOf(global.ArrayBuffer), 'ArrayBuffer');
// 		});
// 	}

// 	if (global.Buffer) {
// 		test('Buffer', t => {
// 			t.is(constructorNameOf(global.Buffer), 'Buffer');
// 		});

// 		test('String', t => {
// 			t.is(constructorNameOf(global.Buffer.name), 'String');
// 		});

// 		test('Buffer', t => {
// 			t.is(constructorNameOf(new global.Buffer('ab')), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		test('Promise', t => {
// 			t.is(constructorNameOf(global.Promise), 'Promise');
// 		});

// 		test('Promise', t => {
// 			t.is(constructorNameOf(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });
