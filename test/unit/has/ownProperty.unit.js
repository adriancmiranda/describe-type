import ownProperty from '~/has/ownProperty.js';

describe('#ownProperty', () => {
	it('exposed', function () {
		expect(ownProperty).toEqual(jasmine.any(Function));
	});
});
