var expect = require('chai').expect;
var type = require('../../');

describe('typify', function () {
	it('exposed', function () {
		expect(toString.call(type.typify)).to.equal('[object Function]');
	});

	it('', function () {
		expect(type.typify('Arguments', (() => arguments)())).to.equal('Arguments');
	});

	it('', function () {
		expect(type.typify([global.Symbol, String, Function, Object, Boolean, global.Promise])).to.equal('Symbol|String|Function|Object|Boolean|Promise');
	});

	it('', function () {
		expect(type.typify([global.Symbol, String, Function, Object, global.Boolean,])).to.equal('Symbol|String|Function|Object|Boolean'); // should be 'Symbol|String|Function|Object|Boolean|Undefined'?
	});

	it('', function () {
		expect(type.typify('Symbol|String|Function|Object|Boolean', true)).to.equal('Symbol|String|Function|Object|Boolean');
	});

	it('', function () {
		expect(type.typify([1, []])).to.equal('Number|Array');
	});

	it('', function () {
		expect(type.typify([1, 'Custom', {}])).to.equal('Number|String|Object');
	});

	it('', function () {
		expect(type.typify([1, 'Custom', {}], true)).to.equal('Number|Custom|Object');
	});

	it('', function () {
		expect(type.typify('Custom', true)).to.equal('Custom');
	});

	it('', function () {
		expect(type.typify([])).to.equal('Array');
	});

	it('', function () {
		expect(type.typify(1)).to.equal('Number');
	});

	it('', function () {
		expect(type.typify({})).to.equal('Object');
	});

	it('', function () {
		expect(type.typify({ name: 1 })).to.equal('Object');
	});

	it('', function () {
		expect(type.typify(/^./g)).to.equal('RegExp');
	});

	it('', function () {
		expect(type.typify(false)).to.equal('Boolean');
	});

	it('', function () {
		expect(type.typify(new Date())).to.equal('Date');
	});

	it('', function () {
		expect(type.typify(Date)).to.equal('Date');
	});

	it('', function () {
		expect(type.typify(global.ArrayBuffer)).to.equal('ArrayBuffer');
	});

	it('', function () {
		expect(type.typify(new global.ArrayBuffer(4))).to.equal('ArrayBuffer');
	});

	it('', function () {
		expect(type.typify(Buffer)).to.equal('Buffer');
	});

	it('', function () {
		expect(type.typify(new Buffer('ab'))).to.equal('Buffer');
	});

	it('', function () {
		expect(type.typify(new global.Promise((resolve) => { resolve(); }))).to.equal('Promise');
	});
});
