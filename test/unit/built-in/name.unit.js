import test from 'ava';
import Custom from 'fixtures/datatype/types/custom';
import * as type from '~';

test('foo', t => {
	t.pass();
});
// test('#name', (t) => {
// 	it('exposed', (t) => {
// 		t.is(toString.call(type.name), '[object Function]');
// 	});

// 	it('Arguments', (t) => {
// 		t.is(type.name((() => arguments)()), 'Arguments');
// 	});

// 	it('String', (t) => {
// 		t.is(type.name(String), 'String');
// 	});

// 	it('RegExp', (t) => {
// 		t.is(type.name(RegExp), 'RegExp');
// 	});

// 	it('Number', (t) => {
// 		t.is(type.name(Number), 'Number');
// 	});

// 	it('TypeError', (t) => {
// 		t.is(type.name(TypeError), 'TypeError');
// 	});

// 	it('Error', (t) => {
// 		t.is(type.name(Error), 'Error');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.name(Object), 'Object');
// 	});

// 	it('Array', (t) => {
// 		t.is(type.name(Array), 'Array');
// 	});

// 	it('Boolean', (t) => {
// 		t.is(type.name(Boolean), 'Boolean');
// 	});

// 	it('Date', (t) => {
// 		t.is(type.name(Date), 'Date');
// 	});

// 	it('null', (t) => {
// 		t.is(type.name(null), 'null');
// 	});

// 	it('undefined', (t) => {
// 		t.is(type.name(undefined), 'undefined');
// 	});

// 	it('NaN', (t) => {
// 		t.is(type.name(NaN), 'NaN');
// 	});

// 	it('_a_b|b_a_', (t) => {
// 		t.is(type.name('|a-b|b>a|', true), '_a_b|b_a_');
// 	});

// 	it('ab|ba', (t) => {
// 		t.is(type.name('ab|ba', true), 'ab|ba');
// 	});

// 	it('String', (t) => {
// 		t.is(type.name('ab|ba'), 'String');
// 	});

// 	it('Array', (t) => {
// 		t.is(type.name([1, 2]), 'Array');
// 	});

// 	it('RegExp', (t) => {
// 		t.is(type.name(/^./g), 'RegExp');
// 	});

// 	it('Number', (t) => {
// 		t.is(type.name(10000), 'Number');
// 	});

// 	it('Object', (t) => {
// 		t.is(type.name({ name: 1 }), 'Object');
// 	});

// 	it('Boolean', (t) => {
// 		t.is(type.name(false), 'Boolean');
// 	});

// 	it('Date', (t) => {
// 		t.is(type.name(new Date()), 'Date');
// 	});

// 	if (Custom.supportsCustomization) {
// 		it('FixtureTest', (t) => {
// 			t.is(type.name(new Custom('FixtureTest')), 'FixtureTest');
// 		});

// 		it('FixtureTest', (t) => {
// 			t.is(type.name(Custom), 'FixtureTest');
// 		});
// 	}

// 	if (global.Symbol) {
// 		it('Symbol', (t) => {
// 			t.is(type.name(global.Symbol), 'Symbol');
// 		});
// 	}

// 	if (global.Promise) {
// 		it('Promise', (t) => {
// 			t.is(type.name(global.Promise), 'Promise');
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		it('ArrayBuffer', (t) => {
// 			t.is(type.name(global.ArrayBuffer), 'ArrayBuffer');
// 		});

// 		it('ArrayBuffer', (t) => {
// 			t.is(type.name(new global.ArrayBuffer(4)), 'ArrayBuffer');
// 		});
// 	}

// 	if (global.Int32Array && global.ArrayBuffer) {
// 		it('Int32Array', (t) => {
// 			t.is(type.name(new global.Int32Array(new global.ArrayBuffer(8))), 'Int32Array');
// 		});
// 	}

// 	if (global.Buffer) {
// 		it('Buffer', (t) => {
// 			t.is(type.name(global.Buffer), 'Buffer');
// 		});

// 		it('Buffer', (t) => {
// 			t.is(type.name(new global.Buffer('ab')), 'Buffer');
// 		});
// 	}
// });
