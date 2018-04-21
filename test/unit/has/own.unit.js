import test from 'ava';
import own from '../../../has/own.js';

test('#own', () => {
	it('exposed', function () {
		expect(own).toEqual(jasmine.any(Function));
	});
});
