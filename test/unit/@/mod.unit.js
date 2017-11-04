import mod from '~/@/mod.js';

describe('#mod', function () {
	it('exposed', function () {
		expect(mod).toEqual(jasmine.any(Function));
	});

	it('negative range', function () {
		expect(mod(-10, -9, 0)).toEqual(-1);
	});

	it('positive range', function () {
		expect(mod(10, 0, 9)).toEqual(1);
	});

	it('no sense range', function () {
		expect(mod(10, 0, 0)).toEqual(0);
	});

	it('empty range', function () {
		expect(mod()).toEqual(0);
	});
});
