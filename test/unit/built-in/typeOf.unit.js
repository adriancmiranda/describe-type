import test from 'ava';
import Custom from '../../fixtures/datatype/types/custom';
import * as type from '../../../source';

test('foo', t => {
	t.pass();
});
// test('#typeOf', (t) => {
// 	it('exposed', (t) => {
// 		t.is(toString.call(type.typeOf), '[object Function]', 'should be a function');;
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf((() => arguments)()), 'Arguments');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(arguments), 'Arguments');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf('ab'), 'String');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(new String('foo')), 'String');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(/^./g), 'RegExp');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(new RegExp('foo')), 'RegExp');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(10000), 'Number');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(new Number(42)), 'Number');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf({ name: 1 }), 'Object');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf({}), 'Object');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Object.create(null)), 'Object');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(new Custom()), 'Custom');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf([]), 'Array');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf([1, 2]), 'Array');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(new Array()), 'Array');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(true), 'Boolean');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(false), 'Boolean');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(new Boolean(true)), 'Boolean');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(null), 'null');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(undefined), 'undefined');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(String), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Boolean), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Number), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(RegExp), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(TypeError), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Error), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Object), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Array), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Boolean), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Date), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(Custom), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf((t) => {}), 'Function');
// 	});

// 	it('', (t) => {
// 		t.is(type.typeOf(new Function()), 'Function');
// 	});

// 	if (global.Symbol) {
// 		it('', (t) => {
// 			t.is(type.typeOf(global.Symbol('bar')), 'Symbol');
// 		});

// 		it('', (t) => {
// 			t.is(type.typeOf(global.Symbol), 'Function');
// 		});
// 	}

// 	if (global.Map) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Map()), 'Map');
// 		});
// 	}

// 	if (global.WeakMap) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.WeakMap()), 'WeakMap');
// 		});
// 	}

// 	if (global.Set) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Set()), 'Set');
// 		});
// 	}

// 	if (global.WeakSet) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.WeakSet()), 'WeakSet');
// 		});
// 	}

// 	if (global.Int8Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Int8Array()), 'Int8Array');
// 		});
// 	}

// 	if (global.Uint8Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Uint8Array()), 'Uint8Array');
// 		});
// 	}

// 	if (global.Uint8ClampedArray) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Uint8ClampedArray()), 'Uint8ClampedArray');
// 		});
// 	}

// 	if (global.Int16Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Int16Array()), 'Int16Array');
// 		});
// 	}

// 	if (global.Uint16Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Uint16Array()), 'Uint16Array');
// 		});
// 	}

// 	if (global.Int32Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Int32Array()), 'Int32Array');
// 		});
// 	}

// 	if (global.Uint32Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Uint32Array()), 'Uint32Array');
// 		});
// 	}

// 	if (global.Float32Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Float32Array()), 'Float32Array');
// 		});
// 	}

// 	if (global.Float64Array) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.Float64Array()), 'Float64Array');
// 		});
// 	}

// 	it('', (t) => {
// 		t.is(type.typeOf(new Date()), 'Date');
// 	});

// 	if (global.ArrayBuffer) {
// 		it('', (t) => {
// 			t.is(type.typeOf(global.ArrayBuffer), 'Function');
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		it('', (t) => {
// 			t.is(type.typeOf(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 		});
// 	}

// 	if (global.Buffer) {
// 		it('', (t) => {
// 			t.is(type.typeOf(global.Buffer), 'Function');
// 		});

// 		it('Buffer', (t) => {
// 			t.is(type.typeOf(new Buffer(3)), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		it('Promise', (t) => {
// 			t.is(type.typeOf(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });

// test('typeOf.generatorFunction', (t) => {
// 	it('', (t) => {
// 		// const genFn = function* () { yield 2; return Infinity; };
// 		// t.is(type.typeOf(genFn), 'GeneratorFunction');
// 	});
// });
