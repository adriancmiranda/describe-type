var expect = require('chai').expect;
var type = require('../../');

describe('to', function () {
	it('exposed', function () {
		expect(toString.call(type.to)).to.equal('[object Object]');
	});

	describe('#string', function () {
		it('exposed', function () {
			expect(toString.call(type.to.string)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.to.string(/foo/)).to.equal('/foo/');
		});

		it('', function () {
			expect(type.to.string(function Test() {})).to.equal('function Test() {}');
		});

		it('', function () {
			expect(type.to.string({})).to.equal('{}');
		});

		it('', function () {
			expect(type.to.string(1)).to.equal('1');
		});

		it('', function () {
			expect(type.to.string(null)).to.equal('null');
		});

		it('', function () {
			expect(type.to.string(), undefined);
		});
	});

	describe('#int', function () {
		it('exposed', function () {
			expect(toString.call(type.to.int)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.to.int(-1.2)).to.equal(-1);
		});

		it('', function () {
			expect(type.to.int(1.2)).to.equal(1);
		});

		it('', function () {
			expect(type.to.int(1)).to.equal(1);
		});
	});

	describe('#uint', function () {
		it('exposed', function () {
			expect(toString.call(type.to.uint)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.to.uint(-1.2)).to.equal(0);
		});

		it('', function () {
			expect(type.to.uint(1.2)).to.equal(1);
		});

		it('', function () {
			expect(type.to.uint(1)).to.equal(1);
		});
	});

	describe('#float', function () {
		it('exposed', function () {
			expect(toString.call(type.to.float)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.to.float('1')).to.equal(1);
		});

		it('', function () {
			expect(type.to.float('1.2')).to.equal(1.2);
		});
	});

	describe('#bool', function () {
		it('exposed', function () {
			expect(toString.call(type.to.bool)).to.equal('[object Function]');
		});

		it('', function () {
			expect(type.to.bool(0)).to.equal(false);
		});

		it('', function () {
			expect(type.to.bool(1)).to.equal(true);
		});

		it('', function () {
			expect(type.to.bool('true')).to.equal(true);
		});

		it('', function () {
			expect(type.to.bool('false')).to.equal(false);
		});

		it('', function () {
			expect(type.to.bool(NaN)).to.equal(false);
		});

		it('', function () {
			expect(type.to.bool(Infinity)).to.equal(true);
		});

		it('', function () {
			expect(type.to.bool('0')).to.equal(false);
		});

		it('', function () {
			expect(type.to.bool('1')).to.equal(true);
		});
	});
});
