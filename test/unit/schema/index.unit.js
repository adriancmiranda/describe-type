import * as SchemaErrors from '~/schema/errors';
import schema from '~/schema';

function sprop(schema, value) {
	return schema({ $foo: schema }, { foo: value }).foo;
}
