import test from 'ava';
import * as type from '~';

test('#intOf', function () {
	it('exposed', function () {
		expect(type.intOf).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.intOf(-1.2)).toEqual(-1);
	});

	it('', function () {
		expect(type.intOf(1.2)).toEqual(1);
	});

	it('', function () {
		expect(type.intOf(1)).toEqual(1);
	});
});
