import own from '~/has/own.js';

describe('#own', () => {
	it('exposed', function () {
		expect(own).toEqual(jasmine.any(Function));
	});
});
