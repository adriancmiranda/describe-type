import test from 'ava';
import ownValue from '../../../has/ownValue.js';

test('#ownValue', () => {
	it('exposed', function () {
		expect(ownValue).toEqual(jasmine.any(Function));
	});
});
