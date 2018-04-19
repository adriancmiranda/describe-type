import unsafeMethod from '../../../has/unsafeMethod.js';

describe('#unsafeMethod', () => {
	it('exposed', function () {
		expect(unsafeMethod).toEqual(jasmine.any(Function));
	});
});
