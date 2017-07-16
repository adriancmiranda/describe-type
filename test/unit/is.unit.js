var expect = require('chai').expect;
var ObjectFixture = require('../fixtures/object.fixture');
var type = require('../../');

describe('is', function () {
	it('exposed', function () {
		expect(toString.call(type.is)).to.equal('[object Function]');
	});

	describe('#buffer', function () {
		it('exposed', function () {
			expect(toString.call(type.is.buffer)).to.equal('[object Function]');
		});

		it('alias works', function () {
			expect(type.is.a.buffer).to.equal(type.is.buffer);
		});

		it('alias works', function () {
			expect(type.is.an.buffer).to.equal(type.is.buffer);
		});

		it('', function () {
			expect(type.is.buffer(new global.Uint8Array(1))).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(new Buffer(1))).to.equal(true);
		});

		it('', function () {
			expect(type.is.buffer(undefined)).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(new (function Buffer() {})())).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(null)).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(false)).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(true)).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(() => 'foo')).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer('foo')).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer({})).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer('')).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(0)).to.equal(false);
		});

		it('', function () {
			expect(type.is.buffer(1)).to.equal(false);
		});
	});

	describe('#not.buffer', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not.buffer)).to.equal('[object Function]');
		});

		it('alias works', function () {
			expect(type.is.not.a.buffer).to.equal(type.is.not.buffer);
		});

		it('alias works', function () {
			expect(type.is.not.an.buffer).to.equal(type.is.not.buffer);
		});

		it('', function () {
			expect(type.is.not.buffer(new (function Buffer() {})())).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.buffer(new global.Uint8Array(1))).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.buffer(new Buffer(1))).to.equal(false);
		});
	});

	describe('#arraylike', function () {
		it('exposed', function () {
			expect(toString.call(type.is.arraylike)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.arraylike((() => arguments)())).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike(new global.Uint8Array(10))).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike(new String('foo'))).to.equal(true);
		});

		// it('', function () {
		// 	expect(type.is.arraylike(global.document.body.children)).to.equal(true);
		// });

		it('', function () {
			expect(type.is.arraylike({ 0: NaN, length: 0 })).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike({ 0: 'foo', length: 1 })).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike([undefined, undefined, undefined])).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike([0, 1, undefined])).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike(new Array(2))).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike([])).to.equal(true);
		});

		it('', function () {
			expect(type.is.arraylike({ length: 0 })).to.equal(true);
		});
	});


	describe('#not.arraylike', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not.arraylike)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: 2 })).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike(Object.create(null))).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({})).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike(null)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike(false)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike()).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: -1 })).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: NaN })).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: 'foo' })).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.arraylike({ length: '' })).to.equal(true);
		});
	});

	describe('test Buffer on browser', function () {
		it('unsupported', function () {
			const buffer = Buffer;
			delete global.Buffer;
			expect(type.is.buffer(1)).to.equal(false);
			global.Buffer = buffer;
		});
	});

	describe('#numeric', function () {
		it('exposed', function () {
			expect(toString.call(type.is.numeric)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.numeric('0')).to.equal(true);
		});

		it('', function () {
			expect(type.is.numeric('1')).to.equal(true);
		});

		it('', function () {
			expect(type.is.numeric('1.2')).to.equal(true);
		});

		it('', function () {
			expect(type.is.numeric(1)).to.equal(true);
		});
	});


	describe('#not.numeric', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not.numeric)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.not.numeric('1.2a')).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.numeric('a1.2')).to.equal(true);
		});
	});

	describe('#int', function () {
		it('exposed', function () {
			expect(toString.call(type.is.int)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.int(-1)).to.equal(true);
		});

		it('', function () {
			expect(type.is.int(12)).to.equal(true);
		});

		// it('', function () {
		// 	expect(type.is.int('12')).to.equal(false);
		// });
	});

	describe('#not.int', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not.int)).to.equal('[object Function]');
		});

		// it('', function () {
		// 	expect(type.is.not.int('12')).to.equal(true);
		// });

		it('', function () {
			expect(type.is.not.int('1.2a')).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.int('1.2')).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.int(1.2)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.int(-1.2)).to.equal(true);
		});
	});

	describe('#uint', function () {
		it('exposed', function () {
			expect(toString.call(type.is.uint)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.uint(0)).to.equal(true);
		});

		it('', function () {
			expect(type.is.uint(1)).to.equal(true);
		});
	});

	describe('#not.uint', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not.uint)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.not.uint(1.2)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.uint(-1.2)).to.equal(true);
		});
	});

	describe('#primitive', function () {
		it('exposed', function () {
			expect(toString.call(type.is.primitive)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.primitive()).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(null)).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(true)).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(false)).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(NaN)).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(Object)).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(function foo() {})).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(1)).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive('foo')).to.equal(true);
		});

		it('', function () {
			expect(type.is.primitive(global.Symbol('foo'))).to.equal(true);
		});
	});

	describe('#not.primitive', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not.primitive)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.not.primitive({})).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.primitive([])).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.primitive(Object.create(null))).to.equal(true);
		});
	});

	describe('#json', function () {
		it('exposed', function () {
			expect(toString.call(type.is.json)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.json(JSON.stringify({}))).to.equal(true);
		});

		it('', function () {
			expect(type.is.json(JSON.stringify([]))).to.equal(true);
		});
	});

	describe('#not.json', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not.json)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.is.not.json(JSON.stringify(''))).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.json({})).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.json([])).to.equal(true);
		});

		it('', function () {
			expect(type.is.not.json(0)).to.equal(true);
		});
	});

	describe('is', function () {
		it('exposed', function () {
			expect(toString.call(type.is)).to.equal('[object Function]');
		});

		it('alias works', function () {
			expect(type.is.a).to.equal(type.is);
		});

		it('alias works', function () {
			expect(type.is.an).to.equal(type.is);
		});

		it('', function () {
			expect(type.is('Arguments', (() => arguments)())).to.equal(true);
		});

		it('', function () {
			expect(type.is('Function|Array|Number', Infinity)).to.equal(false);
		});

		it('', function () {
			expect(type.is('Function|Array|Infinity', String)).to.equal(true);
		});

		it('', function () {
			expect(type.is('Function|Array', String)).to.equal(true);
		});

		it('', function () {
			expect(type.is('Function|Array', [])).to.equal(true);
		});

		it('', function () {
			expect(type.is('Function|Array', () => [])).to.equal(true);
		});

		it('', function () {
			expect(type.is('String|Function', 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Infinity], Infinity)).to.equal(true);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Infinity], Number)).to.equal(true);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Infinity], 0)).to.equal(false);
		});

		it('', function () {
			expect(type.is([String, Function, Object, Boolean], 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is([String.name, Function.name], 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is('String|Function', () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is([String, Function], () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is([String.name, Function.name], () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is('Function', () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is(Function, () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is(Function.name, () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is('String', () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is(String, () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is(String.name, () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is(ObjectFixture, new ObjectFixture('pirate'))).to.equal(true);
		});

		it('', function () {
			expect(type.is(ObjectFixture.name, new ObjectFixture('pirate'))).to.equal(true);
		});

		it('', function () {
			expect(type.is('Pirate', new ObjectFixture('Pirate'))).to.equal(true);
		});

		it('', function () {
			expect(type.is(undefined, undefined)).to.equal(true);
		});

		it('', function () {
			expect(type.is('undefined', undefined, true)).to.equal(true);
		});

		it('', function () {
			expect(type.is(null, null)).to.equal(true);
		});

		it('', function () {
			expect(type.is('null', null, true)).to.equal(true);
		});

		it('', function () {
			expect(type.is(Number, Infinity)).to.equal(false);
		});

		it('', function () {
			expect(type.is(Infinity, Infinity)).to.equal(true);
		});

		it('', function () {
			expect(type.is(NaN, NaN)).to.equal(true);
		});

		it('', function () {
			expect(type.is(Number, NaN)).to.equal(false);
		});

		it('', function () {
			expect(type.is(Number.name, NaN)).to.equal(false);
		});

		it('', function () {
			expect(type.is('Number', NaN)).to.equal(false);
		});

		it('', function () {
			expect(type.is(Buffer, new global.Uint8Array(1))).to.equal(false);
		});
	});

	describe('#not', function () {
		it('exposed', function () {
			expect(toString.call(type.is.not)).to.equal('[object Function]');
		});

		it('alias works', function () {
			expect(type.is.not.a).to.equal(type.is.not);
		});

		it('alias works', function () {
			expect(type.is.not.an).to.equal(type.is.not);
		});

		it('', function () {
			expect(type.is.not('Arguments', (() => arguments)())).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array|Number', String)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array|Number', Infinity)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not('Function|Array', String)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array', [])).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('Function|Array', () => [])).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('String|Function', 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Boolean], 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Infinity], Infinity)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Infinity], Number)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not([String, Function, Object, Infinity], 0)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not([String.name, Function.name], 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('String|Function', () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not([String, Function], () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not([String.name, Function.name], () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('Function', () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(Function, () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(Function.name, () => 'pirate')).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('String', () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is.not(String, () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is.not(String.name, () => 'pirate')).to.equal(true);
		});

		it('', function () {
			expect(type.is.not(ObjectFixture, new ObjectFixture('pirate'))).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(ObjectFixture.name, new ObjectFixture('pirate'))).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('ObjectFixture', new ObjectFixture())).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(undefined, undefined)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('undefined', undefined, true)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(null, null)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not('null', null, true)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(Infinity, Infinity)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(Infinity, Number)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not(Number, Infinity)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not(NaN, NaN)).to.equal(false);
		});

		it('', function () {
			expect(type.is.not(Number, NaN)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not(Number.name, NaN)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not('Number', NaN)).to.equal(true);
		});

		it('', function () {
			expect(type.is.not(global.Uint8Array, new Buffer(0))).to.equal(true);
		});
	});
});
