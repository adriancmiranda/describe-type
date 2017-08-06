const is = require('./is');

function define(key, fn) {
	is[key] = fn;
	is.not[key] = value => !fn(value);
}

is.a = is.an = is;
is.not = require('./not');
is.not.a = is.not.an = is.not;
define('numeric', require('./numeric'));
define('int', require('./int'));
define('uint', require('./uint'));
define('primitive', require('./primitive'));
define('buffer', require('./buffer'));
define('arraylike', require('./arraylike'));
define('json', require('./json'));

module.exports = is;
