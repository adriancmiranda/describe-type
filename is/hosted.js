const primitive = require('./primitive.js');

/**
 *
 * @function
 * @memberof is
 * @param {String|Number} key
 * @param {Object|Array|Function} host
 * @returns {Boolean}
 */
module.exports = function hosted(key, host) {
	return (host === undefined || host === null || primitive(host[key]) === false) === true;
}
