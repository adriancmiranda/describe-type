import Exotic from '../fixtures/exotic.fixture';
import type from '../../';

describe('is', function () {
	it('exposed', function () {
		expect(type.is).toEqual(jasmine.any(Function));
	});

	describe('#buffer', function () {
		it('exposed', function () {
			expect(type.is.buffer).toEqual(jasmine.any(Function));
		});

		it('alias works', function () {
			expect(type.is.a.buffer).toEqual(type.is.buffer);
		});

		it('alias works', function () {
			expect(type.is.an.buffer).toEqual(type.is.buffer);
		});

		it('', function () {
			expect(type.is.buffer(new global.Uint8Array(1))).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(new Buffer(1))).toEqual(true);
		});

		it('', function () {
			expect(type.is.buffer(undefined)).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(new (function Buffer() {})())).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(null)).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(false)).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(true)).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(() => 'foo')).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer('foo')).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer({})).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer('')).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(0)).toEqual(false);
		});

		it('', function () {
			expect(type.is.buffer(1)).toEqual(false);
		});
	});

	describe('#not.buffer', function () {
		it('exposed', function () {
			expect(type.is.not.buffer).toEqual(jasmine.any(Function));
		});

		it('type.is.not.a.buffer: alias works', function () {
			expect(type.is.not.a.buffer).toEqual(type.is.not.buffer);
		});

		it('type.is.not.an.buffer: alias works', function () {
			expect(type.is.not.an.buffer).toEqual(type.is.not.buffer);
		});

		it('', function () {
			expect(type.is.not.buffer(new (function Buffer() {})())).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.buffer(new global.Uint8Array(1))).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.buffer(new Buffer(1))).toEqual(false);
		});
	});

	describe('#arraylike', function () {
		it('exposed', function () {
			expect(type.is.arraylike).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.arraylike((() => arguments)())).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike(new global.Uint8Array(10))).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike(new String('foo'))).toEqual(true);
		});

		// it('', function () {
		// 	expect(type.is.arraylike(global.document.body.children)).toEqual(true);
		// });

		it('', function () {
			expect(type.is.arraylike({ 0: NaN, length: 0 })).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike({ 0: 'foo', length: 1 })).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike([undefined, undefined, undefined])).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike([0, 1, undefined])).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike(new Array(2))).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike([])).toEqual(true);
		});

		it('', function () {
			expect(type.is.arraylike({ length: 0 })).toEqual(true);
		});
	});


	describe('#not.arraylike', function () {
		it('exposed', function () {
			expect(type.is.not.arraylike).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: 2 })).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike(Object.create(null))).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({})).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike(null)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike(false)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike()).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: -1 })).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: NaN })).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: 'foo' })).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: '' })).toEqual(true);
		});
	});

	describe('test Buffer on browser', function () {
		it('unsupported', function () {
			const buffer = Buffer;
			delete global.Buffer;
			expect(type.is.buffer(1)).toEqual(false);
			global.Buffer = buffer;
		});
	});

	describe('#numeric', function () {
		it('exposed', function () {
			expect(type.is.numeric).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.numeric('0')).toEqual(true);
		});

		it('', function () {
			expect(type.is.numeric('1')).toEqual(true);
		});

		it('', function () {
			expect(type.is.numeric('1.2')).toEqual(true);
		});

		it('', function () {
			expect(type.is.numeric(1)).toEqual(true);
		});
	});


	describe('#not.numeric', function () {
		it('exposed', function () {
			expect(type.is.not.numeric).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.not.numeric('1.2a')).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.numeric('a1.2')).toEqual(true);
		});
	});

	describe('#int', function () {
		it('exposed', function () {
			expect(type.is.int).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.int(-1)).toEqual(true);
		});

		it('', function () {
			expect(type.is.int(12)).toEqual(true);
		});

		// it('', function () {
		// 	expect(type.is.int('12')).toEqual(false);
		// });
	});

	describe('#not.int', function () {
		it('exposed', function () {
			expect(type.is.not.int).toEqual(jasmine.any(Function));
		});

		// it('', function () {
		// 	expect(type.is.not.int('12')).toEqual(true);
		// });

		it('', function () {
			expect(type.is.not.int('1.2a')).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.int('1.2')).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.int(1.2)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.int(-1.2)).toEqual(true);
		});
	});

	describe('#uint', function () {
		it('exposed', function () {
			expect(type.is.uint).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.uint(0)).toEqual(true);
		});

		it('', function () {
			expect(type.is.uint(1)).toEqual(true);
		});
	});

	describe('#not.uint', function () {
		it('exposed', function () {
			expect(type.is.not.uint).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.not.uint(1.2)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.uint(-1.2)).toEqual(true);
		});
	});

	describe('#primitive', function () {
		it('exposed', function () {
			expect(type.is.primitive).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.primitive()).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive(null)).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive(true)).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive(false)).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive(NaN)).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive(Object)).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive(function foo() {})).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive(1)).toEqual(true);
		});

		it('', function () {
			expect(type.is.primitive('foo')).toEqual(true);
		});

		if (global.Symbol) {
			it('', function () {
				expect(type.is.primitive(global.Symbol('foo'))).toEqual(true);
			});
		}
	});

	describe('#not.primitive', function () {
		it('exposed', function () {
			expect(type.is.not.primitive).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.not.primitive({})).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.primitive([])).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.primitive(Object.create(null))).toEqual(true);
		});
	});

	describe('#json', function () {
		it('exposed', function () {
			expect(type.is.json).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.json(JSON.stringify({}))).toEqual(true);
		});

		it('', function () {
			expect(type.is.json(JSON.stringify([]))).toEqual(true);
		});
	});

	describe('#not.json', function () {
		it('exposed', function () {
			expect(type.is.not.json).toEqual(jasmine.any(Function));
		});

		it('', function () {
			expect(type.is.not.json(JSON.stringify(''))).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.json({})).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.json([])).toEqual(true);
		});

		it('', function () {
			expect(type.is.not.json(0)).toEqual(true);
		});
	});

	describe('is', function () {
		it('exposed', function () {
			expect(type.is).toEqual(jasmine.any(Function));
		});

		it('alias works', function () {
			expect(type.is.a).toEqual(type.is);
		});

		it('alias works', function () {
			expect(type.is.an).toEqual(type.is);
		});

		it('', function () {
			expect(type.is('Arguments', (() => arguments)())).toEqual(true);
		});

		it('', function () {
			expect(type.is('Function|Array|Number', Infinity)).toEqual(false);
		});

		it('', function () {
			expect(type.is('Function|Array|Infinity', String)).toEqual(true);
		});

		it('', function () {
			expect(type.is('Function|Array', String)).toEqual(true);
		});

		it('', function () {
			expect(type.is('Function|Array', [])).toEqual(true);
		});

		it('', function () {
			expect(type.is('Function|Array', () => [])).toEqual(true);
		});

		it('', function () {
			expect(type.is('String|Function', 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Infinity], Infinity)).toEqual(true);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Infinity], Number)).toEqual(true);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Infinity], 0)).toEqual(false);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Boolean], 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is([String.name, Function.name], 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is('String|Function', () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is([String, Function], () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is([String.name, Function.name], () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is('Function', () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is(Function, () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is(Function.name, () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is('String', () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is(String, () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is(String.name, () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is(Exotic, new Exotic('pirate'))).toEqual(true);
		});

		it('', function () {
			expect(type.is(Exotic.name, new Exotic('pirate'))).toEqual(true);
		});

		if (Exotic.supportsCustomization) {
			it('', function () {
				expect(type.is('Pirate', new Exotic('Pirate'))).toEqual(true);
			});
		}

		it('', function () {
			expect(type.is(undefined, undefined)).toEqual(true);
		});

		it('', function () {
			expect(type.is('undefined', undefined, true)).toEqual(true);
		});

		it('', function () {
			expect(type.is(null, null)).toEqual(true);
		});

		it('', function () {
			expect(type.is('null', null, true)).toEqual(true);
		});

		it('', function () {
			expect(type.is(Number, Infinity)).toEqual(false);
		});

		it('', function () {
			expect(type.is(Infinity, Infinity)).toEqual(true);
		});

		it('', function () {
			expect(type.is(NaN, NaN)).toEqual(true);
		});

		it('', function () {
			expect(type.is(Number, NaN)).toEqual(false);
		});

		it('', function () {
			expect(type.is(Number.name, NaN)).toEqual(false);
		});

		it('', function () {
			expect(type.is('Number', NaN)).toEqual(false);
		});

		it('', function () {
			expect(type.is(Buffer, new global.Uint8Array(1))).toEqual(false);
		});
	});

	describe('#not', function () {
		it('exposed', function () {
			expect(type.is.not).toEqual(jasmine.any(Function));
		});

		it('alias works', function () {
			expect(type.is.not.a).toEqual(type.is.not);
		});

		it('alias works', function () {
			expect(type.is.not.an).toEqual(type.is.not);
		});

		it('', function () {
			expect(type.is.not('Arguments', (() => arguments)())).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array|Number', String)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array|Number', Infinity)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not('Function|Array', String)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array', [])).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array', () => [])).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('String|Function', 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Boolean], 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Infinity], Infinity)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Infinity], Number)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Infinity], 0)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not([String.name, Function.name], 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('String|Function', () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not([String, Function], () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not([String.name, Function.name], () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('Function', () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(Function, () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(Function.name, () => 'pirate')).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('String', () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is.not(String, () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is.not(String.name, () => 'pirate')).toEqual(true);
		});

		it('', function () {
			expect(type.is.not(Exotic, new Exotic('pirate'))).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(Exotic.name, new Exotic('pirate'))).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('Exotic', new Exotic())).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(undefined, undefined)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('undefined', undefined, true)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(null, null)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not('null', null, true)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(Infinity, Infinity)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(Infinity, Number)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not(Number, Infinity)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not(NaN, NaN)).toEqual(false);
		});

		it('', function () {
			expect(type.is.not(Number, NaN)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not(Number.name, NaN)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not('Number', NaN)).toEqual(true);
		});

		it('', function () {
			expect(type.is.not(global.Uint8Array, new Buffer(0))).toEqual(true);
		});
	});
});
