import test from 'ava';
import Custom from '../.fixtures/datatype/types/custom';
import * as describeType from '../index.next.js';
import typeOf from './typeOf.next';

test('describeType.typeOf exposure', t => {
	t.is(toString.call(describeType.typeOf), '[object Function]', 'should be a function');
});

test('typeOf exposure', t => {
	t.is(toString.call(typeOf), '[object Function]', 'should be a function');
});

// 	test('', t => {
// 		t.is(typeOf((() => arguments)()), 'Arguments');
// 	});

// 	test('', t => {
// 		t.is(typeOf(arguments), 'Arguments');
// 	});

// 	test('', t => {
// 		t.is(typeOf('ab'), 'String');
// 	});

// 	test('', t => {
// 		t.is(typeOf(new String('foo')), 'String');
// 	});

// 	test('', t => {
// 		t.is(typeOf(/^./g), 'RegExp');
// 	});

// 	test('', t => {
// 		t.is(typeOf(new RegExp('foo')), 'RegExp');
// 	});

// 	test('', t => {
// 		t.is(typeOf(10000), 'Number');
// 	});

// 	test('', t => {
// 		t.is(typeOf(new Number(42)), 'Number');
// 	});

// 	test('', t => {
// 		t.is(typeOf({ name: 1 }), 'Object');
// 	});

// 	test('', t => {
// 		t.is(typeOf({}), 'Object');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Object.create(null)), 'Object');
// 	});

// 	test('', t => {
// 		t.is(typeOf(new Custom()), 'Custom');
// 	});

// 	test('', t => {
// 		t.is(typeOf([]), 'Array');
// 	});

// 	test('', t => {
// 		t.is(typeOf([1, 2]), 'Array');
// 	});

// 	test('', t => {
// 		t.is(typeOf(new Array()), 'Array');
// 	});

// 	test('', t => {
// 		t.is(typeOf(true), 'Boolean');
// 	});

// 	test('', t => {
// 		t.is(typeOf(false), 'Boolean');
// 	});

// 	test('', t => {
// 		t.is(typeOf(new Boolean(true)), 'Boolean');
// 	});

// 	test('', t => {
// 		t.is(typeOf(null), 'null');
// 	});

// 	test('', t => {
// 		t.is(typeOf(undefined), 'undefined');
// 	});

// 	test('', t => {
// 		t.is(typeOf(String), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Boolean), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Number), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(RegExp), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(TypeError), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Error), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Object), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Array), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Boolean), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Date), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(Custom), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(t => {}), 'Function');
// 	});

// 	test('', t => {
// 		t.is(typeOf(new Function()), 'Function');
// 	});

// 	if (global.Symbol) {
// 		test('', t => {
// 			t.is(typeOf(global.Symbol('bar')), 'Symbol');
// 		});

// 		test('', t => {
// 			t.is(typeOf(global.Symbol), 'Function');
// 		});
// 	}

// 	if (global.Map) {
// 		test('', t => {
// 			t.is(typeOf(new global.Map()), 'Map');
// 		});
// 	}

// 	if (global.WeakMap) {
// 		test('', t => {
// 			t.is(typeOf(new global.WeakMap()), 'WeakMap');
// 		});
// 	}

// 	if (global.Set) {
// 		test('', t => {
// 			t.is(typeOf(new global.Set()), 'Set');
// 		});
// 	}

// 	if (global.WeakSet) {
// 		test('', t => {
// 			t.is(typeOf(new global.WeakSet()), 'WeakSet');
// 		});
// 	}

// 	if (global.Int8Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Int8Array()), 'Int8Array');
// 		});
// 	}

// 	if (global.Uint8Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Uint8Array()), 'Uint8Array');
// 		});
// 	}

// 	if (global.Uint8ClampedArray) {
// 		test('', t => {
// 			t.is(typeOf(new global.Uint8ClampedArray()), 'Uint8ClampedArray');
// 		});
// 	}

// 	if (global.Int16Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Int16Array()), 'Int16Array');
// 		});
// 	}

// 	if (global.Uint16Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Uint16Array()), 'Uint16Array');
// 		});
// 	}

// 	if (global.Int32Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Int32Array()), 'Int32Array');
// 		});
// 	}

// 	if (global.Uint32Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Uint32Array()), 'Uint32Array');
// 		});
// 	}

// 	if (global.Float32Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Float32Array()), 'Float32Array');
// 		});
// 	}

// 	if (global.Float64Array) {
// 		test('', t => {
// 			t.is(typeOf(new global.Float64Array()), 'Float64Array');
// 		});
// 	}

// 	test('', t => {
// 		t.is(typeOf(new Date()), 'Date');
// 	});

// 	if (global.ArrayBuffer) {
// 		test('', t => {
// 			t.is(typeOf(global.ArrayBuffer), 'Function');
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		test('', t => {
// 			t.is(typeOf(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 		});
// 	}

// 	if (global.Buffer) {
// 		test('', t => {
// 			t.is(typeOf(global.Buffer), 'Function');
// 		});

// 		test('Buffer', t => {
// 			t.is(typeOf(new Buffer(3)), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		test('Promise', t => {
// 			t.is(typeOf(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });

// test('typeOf.generatorFunction', t => {
// 	test('', t => {
// 		// const genFn = function* () { yield 2; return Infinity; };
// 		// t.is(typeOf(genFn), 'GeneratorFunction');
// 	});
// });
