import test from 'ava';
import Custom from 'fixtures/datatype/types/custom';
import * as type from '~';

test('foo', t => {
	t.pass();
});
// test('constructorOf', (t) => {
// 	it('exposed', (t) => {
// 		t.is(toString.call(type.constructorOf), '[object Function]');
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf((() => arguments)()), Object);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(() => 'foo'), Function);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf((t) => {}), Function);
// 	});

// 	if (global.Symbol) {
// 		it('', (t) => {
// 			t.is(type.constructorOf(global.Symbol('foo')), global.Symbol);
// 		});
// 	}

// 	it('', (t) => {
// 		t.is(type.constructorOf(new String()), String);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new RegExp('^foo')), RegExp);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(/^./g), RegExp);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new TypeError('foo')), TypeError);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new Error('foo')), Error);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new Object()), Object);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf({ name: 1 }), Object);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new Array()), Array);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf([1, 2]), Array);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new Boolean()), Boolean);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new Date()), Date);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(null), null);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(undefined), undefined);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(Infinity), Number);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(NaN), Number);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(10000), Number);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf('ab|ba'), String);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(Object.create(null)), Object);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(new Custom('FF')), Custom);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(Custom), Function);
// 	});

// 	it('', (t) => {
// 		t.is(type.constructorOf(false), Boolean);
// 	});

// 	if (global.Promise) {
// 		it('', (t) => {
// 			t.is(type.constructorOf(new global.Promise((resolve) => { resolve(); })), global.Promise);
// 		});
// 	}

// 	if (global.Uint8Array) {
// 		it('', (t) => {
// 			t.is(type.constructorOf(new global.Uint8Array()), global.Uint8Array);
// 		});
// 	}

// 	if (global.ArrayBuffer) {
// 		it('', (t) => {
// 			t.is(type.constructorOf(new global.ArrayBuffer(3)), global.ArrayBuffer);
// 		});

// 		it('', (t) => {
// 			t.is(type.constructorOf(global.ArrayBuffer), Function);
// 		});
// 	}

// 	if (global.Int32Array && global.ArrayBuffer) {
// 		it('', (t) => {
// 			t.is(type.constructorOf(new global.Int32Array(new global.ArrayBuffer(8))), global.Int32Array);
// 		});
// 	}

// 	if (global.Buffer) {
// 		it('', (t) => {
// 			t.is(type.constructorOf(global.Buffer), Function);
// 		});

// 		it('', (t) => {
// 			t.is(type.constructorOf(new global.Buffer('1234')), Buffer);
// 		});
// 	}
// });
