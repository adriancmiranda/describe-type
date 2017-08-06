import type from '../../';

describe('to', function () {
	it('exposed', function () {
		expect(type.to).toEqual(jasmine.any(Object));
	});

	describe('#string', function () {
		it('exposed', function () {
			expect(toString.call(type.to.string)).toEqual('[object Function]');
		});

		it('', function () {
			expect(type.to.string(/foo/)).toEqual('/foo/');
		});

		it('', function () {
			expect(type.to.string(function Test() {})).toEqual('function Test() {}');
		});

		it('', function () {
			expect(type.to.string({})).toEqual('{}');
		});

		it('', function () {
			expect(type.to.string(1)).toEqual('1');
		});

		it('', function () {
			expect(type.to.string(null)).toEqual('null');
		});

		it('', function () {
			expect(type.to.string(), undefined);
		});
	});

	describe('#int', function () {
		it('exposed', function () {
			expect(toString.call(type.to.int)).toEqual('[object Function]');
		});

		it('', function () {
			expect(type.to.int(-1.2)).toEqual(-1);
		});

		it('', function () {
			expect(type.to.int(1.2)).toEqual(1);
		});

		it('', function () {
			expect(type.to.int(1)).toEqual(1);
		});
	});

	describe('#uint', function () {
		it('exposed', function () {
			expect(toString.call(type.to.uint)).toEqual('[object Function]');
		});

		it('', function () {
			expect(type.to.uint(-1.2)).toEqual(0);
		});

		it('', function () {
			expect(type.to.uint(1.2)).toEqual(1);
		});

		it('', function () {
			expect(type.to.uint(1)).toEqual(1);
		});
	});

	describe('#float', function () {
		it('exposed', function () {
			expect(toString.call(type.to.float)).toEqual('[object Function]');
		});

		it('', function () {
			expect(type.to.float('1')).toEqual(1);
		});

		it('', function () {
			expect(type.to.float('1.2')).toEqual(1.2);
		});
	});

	describe('#bool', function () {
		it('exposed', function () {
			expect(toString.call(type.to.bool)).toEqual('[object Function]');
		});

		it('', function () {
			expect(type.to.bool(0)).toEqual(false);
		});

		it('', function () {
			expect(type.to.bool(1)).toEqual(true);
		});

		it('', function () {
			expect(type.to.bool('true')).toEqual(true);
		});

		it('', function () {
			expect(type.to.bool('false')).toEqual(false);
		});

		it('', function () {
			expect(type.to.bool(NaN)).toEqual(false);
		});

		it('', function () {
			expect(type.to.bool(Infinity)).toEqual(true);
		});

		it('', function () {
			expect(type.to.bool('0')).toEqual(false);
		});

		it('', function () {
			expect(type.to.bool('1')).toEqual(true);
		});
	});
});
