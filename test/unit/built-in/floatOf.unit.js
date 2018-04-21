import test from 'ava';
import * as type from '~';

test('#floatOf', function () {
	it('exposed', function () {
		expect(type.floatOf).toEqual(jasmine.any(Function));
	});

	it('', function () {
		expect(type.floatOf('1')).toEqual(1);
	});

	it('', function () {
		expect(type.floatOf('1.2')).toEqual(1.2);
	});
});
