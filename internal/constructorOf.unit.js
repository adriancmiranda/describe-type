import test from 'ava';
import Custom from '../../fixtures/datatype/types/custom';
import * as describeType from '..';
import constructorOf from '../../../internal/constructorOf';

test('describeType.constructorOf exposure', (t) => {
	t.is(toString.call(describeType.constructorOf), '[object Function]', 'should be a function');
});

test('constructorOf exposure', (t) => {
	t.is(toString.call(constructorOf), '[object Function]', 'should be a function');
});

// 	test('', (t) => {
// 		t.is(type.constructorOf((() => arguments)()), Object);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(() => 'foo'), Function);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf((t) => {}), Function);
// 	});

// 	if (global.Symbol) {
// 		test('', (t) => {
// 			t.is(type.constructorOf(global.Symbol('foo')), global.Symbol);
// 		});
// 	}

// 	test('', (t) => {
// 		t.is(type.constructorOf(new String()), String);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new RegExp('^foo')), RegExp);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(/^./g), RegExp);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new TypeError('foo')), TypeError);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new Error('foo')), Error);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new Object()), Object);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf({ name: 1 }), Object);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new Array()), Array);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf([1, 2]), Array);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new Boolean()), Boolean);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new Date()), Date);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(null), null);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(undefined), undefined);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(Infinity), Number);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(NaN), Number);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(10000), Number);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf('ab|ba'), String);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(Object.create(null)), Object);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(new Custom('FF')), Custom);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(Custom), Function);
// 	});

// 	test('', (t) => {
// 		t.is(type.constructorOf(false), Boolean);
// 	});

// 	if (global.Promise) {
// 		test('', (t) => {
// 			t.is(type.constructorOf(new global.Promise((resolve) => { resolve(); })), global.Promise);
// 		});
// 	}

// 	if (global.Uint8Array) {
// 		test('', (t) => {
// 			t.is(type.constructorOf(new global.Uint8Array()), global.Uint8Array);
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		test('', (t) => {
// 			t.is(type.constructorOf(new global.ArrayBuffer(3)), global.ArrayBuffer);
// 		});

// 		test('', (t) => {
// 			t.is(type.constructorOf(global.ArrayBuffer), Function);
// 		});
// 	}

// 	if (global.Int32Array && global.ArrayBuffer) {
// 		test('', (t) => {
// 			t.is(type.constructorOf(new global.Int32Array(new global.ArrayBuffer(8))), global.Int32Array);
// 		});
// 	}

// 	if (global.Buffer) {
// 		test('', (t) => {
// 			t.is(type.constructorOf(global.Buffer), Function);
// 		});

// 		test('', (t) => {
// 			t.is(type.constructorOf(new global.Buffer('1234')), Buffer);
// 		});
// 	}
// });
