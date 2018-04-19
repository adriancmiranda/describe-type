import mod from '../../../@/mod.js';

describe('#mod', function () {
	it('exposed', function () {
		expect(mod).toEqual(jasmine.any(Function));
	});

	it('negative range', function () {
		expect(mod(-10, -9, 0)).toEqual(0);
	});

	it('negative start and negative end', function () {
		expect(mod(-4, -3, -1)).toEqual(-1);
	});

	it('negative start and positive end', function () {
		for (let i = -12; i <= 12; i += 1) {
			expect(mod(i, -12, 12)).toEqual(i);
		}
		expect(mod(-13, -12, 12)).toEqual(12);
		expect(mod(-14, -12, 12)).toEqual(11);
		expect(mod(-15, -12, 12)).toEqual(10);
	});

	it('positive range (9, 0, 9) -> 9', function () {
		expect(mod(9, 0, 9)).toEqual(9);
	});

	it('positive range (-1, 0, 9) -> 9', function () {
		expect(mod(-1, 0, 9)).toEqual(9);
	});

	it('positive range (5, 0, 9) -> 9', function () {
		expect(mod(5, 0, 9)).toEqual(5);
	});

	it('positive range (10, 0, 9) -> 0', function () {
		expect(mod(10, 0, 9)).toEqual(0);
	});

	it('no sense range (1, 0, 0) -> 0', function () {
		expect(mod(1, 0, 0)).toEqual(0);
	});

	it('no sense range (2, 0, 0) -> 0', function () {
		expect(mod(2, 0, 0)).toEqual(0);
	});

	it('no sense range (3, 0, 0) -> 0', function () {
		expect(mod(3, 0, 0)).toEqual(0);
	});

	it('empty range', function () {
		expect(mod()).toEqual(0);
	});
});
