import test from 'ava';
import unsafeMethod from '../../../has/unsafeMethod.js';

test('#unsafeMethod', () => {
	it('exposed', function () {
		expect(unsafeMethod).toEqual(jasmine.any(Function));
	});
});
