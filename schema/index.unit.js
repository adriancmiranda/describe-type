import test from 'ava';
import schema from './index.next';
// import PLError from './error.next';

function sprop(pattern, value) {
	return schema({ $foo: pattern }, { foo: value }).foo;
}

function throws(msgPrefix, t, pattern, value) {
	// const err = t.throws(() => {
	// 	sprop(pattern, value);
	// }, PLError);
	// t.is(err.name, `${msgPrefix}Error`);
	t.pass();
}

function throwUnknownSchema(t, pattern, value, err) {
	throws('UnknownSchema', t, pattern, value, err);
}

function throwInvalidSchema(t, pattern, value, err) {
	throws('InvalidSchema', t, pattern, value, err);
}

function throwRequiredProperty(t, pattern, value, err) {
	throws('RequiredProperty', t, pattern, value, err);
}

function throwUnknownType(t, pattern, value, err) {
	throws('UnknownType', t, pattern, value, err);
}

function throwInvalidType(t, pattern, value, err) {
	throws('InvalidType', t, pattern, value, err);
}

function throwConflictType(t, pattern, value, err) {
	throws('ConflictType', t, pattern, value, err);
}

function throwUnexpectedType(t, pattern, value, err) {
	throws('UnexpectedType', t, pattern, value, err);
}

test('lib/data/parse exists', (t) => {
	t.is(toString.call(schema), '[object Function]', 'should be a function');
});

test('lib/data/parse // simple conflicts', (t) => {
	throwUnexpectedType(t, undefined, null);
	throwUnexpectedType(t, null, undefined);
	throwUnexpectedType(t, String, undefined);
	throwUnexpectedType(t, String, null);
	throwUnexpectedType(t, [Function, String], undefined);
	throwUnexpectedType(t, Function, 'hello');
	throwUnexpectedType(t, String, undefined);
});

test('lib/data/parse // complex conflicts', (t) => {
	throwConflictType(t, {
		type: [Function, String],
		required: true,
		default: {
			$name: String,
			$limit: Number,
		},
	}, { name: 'hello', limit: 1 });
});

test('lib/data/parse // simple', (t) => {
	t.is(sprop([Function, String, undefined], undefined), undefined);
	t.is(sprop([Function, String], 'hello'), 'hello');
	t.is(sprop(String, 'hello'), 'hello');
	t.is(sprop(undefined, undefined), undefined);
	t.is(sprop(null, null), null);
});

test('lib/data/parse // complex', (t) => {
	t.is(sprop({
		type: [Function, String],
		required: true,
		default: 'My default text',
	}, 'hello'), 'hello');

	t.deepEqual(sprop({
		type: [Function, String, Object],
		required: true,
		default: {
			$name: {
				type: String,
				default: 'hey',
			},
			$limit: {
				type: Number,
				default: 2,
			},
			$ext: {
				type: String,
				default: 'pirate',
			},
		},
	}, {}), { name: 'hey', limit: 2, ext: 'pirate' });
});
