describe('#is', () => {
	describe('common', () => {
		require('./a.unit');
		require('./any.unit');
		require('./empty.unit');
		require('./equal.unit');
		require('./nativeFunction.unit');
		require('./not.unit');
		require('./primitive.unit');
		require('./exotic.unit');
	});

	describe('encoded', () => {
		require('./base64.unit');
		require('./hex.unit');
		require('./hexadecimal.unit');
		require('./jsonlike.unit');
	});

	describe('iterable', () => {
		require('./args.unit');
		require('./arraylike.unit');
		// require('./element.unit'); // TODO:
		require('./vector.unit');
	});

	describe('numeric', () => {
		require('./decimal.unit');
		require('./even.unit');
		require('./infinity.unit');
		require('./int.unit');
		require('./nan.unit');
		require('./numeric.unit');
		require('./odd.unit');
		require('./uint.unit');
	});

	describe('shortcuts', () => {
		require('./array.unit');
		require('./bool.unit');
		require('./date.unit');
		require('./error.unit');
		require('./callable.unit');
		require('./nil.unit');
		require('./number.unit');
		require('./object.unit');
		require('./regexp.unit');
		require('./string.unit');
		// require('./symbol.unit'); // TODO:
		require('./undef.unit');
	});
});
