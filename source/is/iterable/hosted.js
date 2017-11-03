import primitive from '../common/primitive.js';

/**
 *
 * @function
 * @memberof is
 * @param {String|Number} key
 * @param {Object|Array|Function} host
 * @returns {Boolean}
 */
export default (key, host) => {
	if (host == null) return false;
	return primitive(host[key]) === false;
}
