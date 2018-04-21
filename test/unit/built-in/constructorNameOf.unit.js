import test from 'ava';
import Custom from 'fixtures/datatype/types/custom';
import * as type from '~';

test('foo', t => {
	t.pass();
});
// test('constructorNameOf', (t) => {
// 	it('exposed', (t) => {
// 		t.is(toString.call(type.constructorNameOf), '[object Function]');
// 	});

// 	it('Arguments', (t) => {
// 		t.is(type.constructorNameOf((() => arguments)()), 'Arguments');
// 	});

// 	it('Function', (t) => {
// 		t.is(type.constructorNameOf(() => 'foo'), 'Function');
// 	});

// 	it('Function', (t) => {
// 		t.is(type.constructorNameOf((t) => { return 'foo'; }), 'Function');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(String), 'String');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(String.name), 'String');
// 	});

// 	it('RegExp', (t) => {
// 		t.is(type.constructorNameOf(RegExp), 'RegExp');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(RegExp.name), 'String');
// 	});

// 	it('Number', (t) => {
// 		t.is(type.constructorNameOf(Number), 'Number');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(Number.name), 'String');
// 	});

// 	it('TypeError', (t) => {
// 		t.is(type.constructorNameOf(TypeError), 'TypeError');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(TypeError.name), 'String');
// 	});

// 	it('Error', (t) => {
// 		t.is(type.constructorNameOf(Error), 'Error');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(Error.name), 'String');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.constructorNameOf(Object), 'Object');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(Object.name), 'String');
// 	});

// 	it('Array', (t) => {
// 		t.is(type.constructorNameOf(Array), 'Array');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(Array.name), 'String');
// 	});

// 	it('Boolean', (t) => {
// 		t.is(type.constructorNameOf(Boolean), 'Boolean');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(Boolean.name), 'String');
// 	});

// 	it('Date', (t) => {
// 		t.is(type.constructorNameOf(Date), 'Date');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(Date.name), 'String');
// 	});

// 	it('null', (t) => {
// 		t.is(type.constructorNameOf(null), 'null');
// 	});

// 	it('undefined', (t) => {
// 		t.is(type.constructorNameOf(undefined), 'undefined');
// 	});

// 	it('Infinity', (t) => {
// 		t.is(type.constructorNameOf(Infinity), 'Infinity');
// 	});

// 	it('NaN', (t) => {
// 		t.is(type.constructorNameOf(NaN), 'NaN');
// 	});

// 	it('undefined', (t) => {
// 		t.is(type.constructorNameOf(NaN.name), 'undefined');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf('ab|ba'), 'String');
// 	});

// 	it('Custom', (t) => {
// 		t.is(type.constructorNameOf(new Custom()), 'Custom');
// 	});

// 	it('Custom', (t) => {
// 		t.is(type.constructorNameOf(Custom), 'Custom');
// 	});

// 	it('String', (t) => {
// 		t.is(type.constructorNameOf(Custom.name), 'String');
// 	});

// 	it('Array', (t) => {
// 		t.is(type.constructorNameOf([1, 2]), 'Array');
// 	});

// 	it('RegExp', (t) => {
// 		t.is(type.constructorNameOf(/^./g), 'RegExp');
// 	});

// 	it('Number', (t) => {
// 		t.is(type.constructorNameOf(10000), 'Number');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.constructorNameOf({ name: 1 }), 'Object');
// 	});

// 	it('Boolean', (t) => {
// 		t.is(type.constructorNameOf(false), 'Boolean');
// 	});

// 	it('Date', (t) => {
// 		t.is(type.constructorNameOf(new Date()), 'Date');
// 	});

// 	if (global.Symbol) {
// 		it('Symbol', (t) => {
// 			t.is(type.constructorNameOf(global.Symbol), 'Symbol');
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		it('ArrayBuffer', (t) => {
// 			t.is(type.constructorNameOf(global.ArrayBuffer), 'ArrayBuffer');
// 		});
// 	}

// 	if (global.Buffer) {
// 		it('Buffer', (t) => {
// 			t.is(type.constructorNameOf(global.Buffer), 'Buffer');
// 		});

// 		it('String', (t) => {
// 			t.is(type.constructorNameOf(global.Buffer.name), 'String');
// 		});

// 		it('Buffer', (t) => {
// 			t.is(type.constructorNameOf(new global.Buffer('ab')), 'Buffer');
// 		});
// 	}

// 	if (global.Promise) {
// 		it('Promise', (t) => {
// 			t.is(type.constructorNameOf(global.Promise), 'Promise');
// 		});

// 		it('Promise', (t) => {
// 			t.is(type.constructorNameOf(new global.Promise((resolve) => { resolve(); })), 'Promise');
// 		});
// 	}
// });
