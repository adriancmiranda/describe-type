import keys from '~/@/keys.js';

// getFoo is property which isn't enumerable
const myObj = Object.create({}, {
	getFoo: {
		value() { return this.foo; }
	}
});
myObj.foo = 1;

describe('#keys', function () {
	it('exposed', function () {
		expect(keys).toEqual(jasmine.any(Function));
	});

	it('array', function () {
		expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2']);
	});

	it('array like object', function () {
		expect(keys({ 0: 'a', 1: 'b', 2: 'c' })).toEqual(['0', '1', '2']);
	});

	it('array like object with random key ordering', function () {
		expect(keys({ 100: 'a', 2: 'b', 7: 'c' })).toEqual(['2', '7', '100']);
	});

	it('ignoring enumerables', function () {
		expect(keys(myObj)).toEqual(['foo']);
	});

	it('reading enumerables', function () {
		expect(keys(myObj), true).toEqual(['foo']);
	});
});
