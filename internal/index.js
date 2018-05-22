const patterns = require('./patterns.js');
const prototypes = require('./prototypes.js');
const builtIn = require('./built-in.js');
const constants = require('./constants.js');

(function (resource) {
	for (const name in resource) {
		if (name === 'default' === false) {
			this[name] = resource[name];
		}
	}
}).call(exports, require('./env.js'));
exports.stringOf = require('./stringOf.js');
exports.booleanOf = require('./booleanOf.js');
exports.floatOf = require('./floatOf.js');
exports.intOf = require('./intOf.js');
exports.uintOf = require('./uintOf.js');
exports.constructorNameOf = require('./constructorNameOf.js');
exports.constructorOf = require('./constructorOf.js');
exports.typeOf = require('./typeOf.js');
exports.typify = require('./typify.js');
exports.name = require('./name.js');
exports.apply = require('./apply.js');
exports.each = require('./each.js');
exports.eachValue = require('./eachValue.js');
exports.eachProperty = require('./eachProperty.js');
exports.resolveProperty = require('./resolveProperty.js');
exports.getExpectedValue = require('./getExpectedValue.js');
exports.mod = require('./mod.js');
exports.stringify = require('./stringify.js');
exports.prototypes = prototypes;
exports.builtIn = builtIn;
exports.patterns = patterns;
exports.constants = constants;
