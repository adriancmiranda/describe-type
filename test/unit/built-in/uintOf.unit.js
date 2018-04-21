import test from 'ava';
import * as type from '~';

test('#uintOf', function () {
	it('exposed', function () {
		expect(type.uintOf).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.uintOf(-1.2)).toEqual(0);
	});

	it('', function () {
		expect(type.uintOf(1.2)).toEqual(1);
	});

	it('', function () {
		expect(type.uintOf(1)).toEqual(1);
	});
});
