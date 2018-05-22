const { CALLEE, ARGUMENTS_SEAL } = require('../../internal/constants.js');
const { objectToString } = require('../../internal/built-in.js');
const unsafeMethod = require('../../has/unsafeMethod.js');
const array = require('../array/array.js');
const object = require('../object/object.js');
const arraylike = require('../arraylike/arraylike.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function args(value) {
	return (array(value) === false && arraylike(value) &&
		object(value) && unsafeMethod(value, CALLEE)
	) || objectToString.call(value) === ARGUMENTS_SEAL;
}
