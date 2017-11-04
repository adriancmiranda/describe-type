import * as type from '~';

describe('#booleanOf', function () {
	it('exposed', function () {
		expect(type.booleanOf).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.booleanOf(0)).toEqual(false);
	});

	it('', function () {
		expect(type.booleanOf(1)).toEqual(true);
	});

	it('', function () {
		expect(type.booleanOf('true')).toEqual(true);
	});

	it('', function () {
		expect(type.booleanOf('false')).toEqual(false);
	});

	it('', function () {
		expect(type.booleanOf(NaN)).toEqual(false);
	});

	it('', function () {
		expect(type.booleanOf(Infinity)).toEqual(true);
	});

	it('', function () {
		expect(type.booleanOf('0')).toEqual(false);
	});

	it('', function () {
		expect(type.booleanOf('1')).toEqual(true);
	});
});
