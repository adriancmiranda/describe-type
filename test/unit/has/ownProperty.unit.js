import test from 'ava';
import ownProperty from '../../../has/ownProperty.js';

test('#ownProperty', () => {
	it('exposed', function () {
		expect(ownProperty).toEqual(jasmine.any(Function));
	});
});
