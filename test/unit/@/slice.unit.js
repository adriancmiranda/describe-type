import slice from '~/@/slice.js';

describe('#slice', function () {
	it('exposed', function () {
		expect(slice).toEqual(jasmine.any(Function));
	});

	it('string', function () {
		expect(slice('Test with string value', 10)).toEqual('string value');
	});

	it('string range', function () {
		expect(slice('Test with string value', 10, 16)).toEqual('string');
	});

	it('array', function () {
		expect(slice('Test with array value'.split(''), 10)).toEqual('array value'.split(''));
	});

	it('array range', function () {
		expect(slice('Test with array value'.split(''), 10, 15)).toEqual('array'.split(''));
	});

	it('arguments', function () {
		expect((function() {
			return slice(arguments, 10);
		}).apply(this, 'Test with arguments value'.split(''))).toEqual('arguments value'.split(''));
	});

	it('arguments range', function () {
		expect((function() {
			return slice(arguments, 10, 19);
		}).apply(this, 'Test with arguments value'.split(''))).toEqual('arguments'.split(''));
	});
});
