import * as type from '~';

describe('#booleanOf', function () {
	it('exposed', function () {
		expect(type.booleanOf).toEqual(jasmine.any(Function));
	});

	it('0 should be false', function () {
		expect(type.booleanOf(0)).toEqual(false);
	});

	it('1 should be true', function () {
		expect(type.booleanOf(1)).toEqual(true);
	});

	it('"true" should be true', function () {
		expect(type.booleanOf('true')).toEqual(true);
	});

	it('"false" should be false', function () {
		expect(type.booleanOf('false')).toEqual(false);
	});

	it('NaN should be false', function () {
		expect(type.booleanOf(NaN)).toEqual(false);
	});

	it('Infinity should be true', function () {
		expect(type.booleanOf(Infinity)).toEqual(true);
	});

	it('"0" should be false', function () {
		expect(type.booleanOf('0')).toEqual(false);
	});

	it('"1" should be true', function () {
		expect(type.booleanOf('1')).toEqual(true);
	});
});
