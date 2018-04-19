import ownValue from '../../../has/ownValue.js';

describe('#ownValue', () => {
	it('exposed', function () {
		expect(ownValue).toEqual(jasmine.any(Function));
	});
});
