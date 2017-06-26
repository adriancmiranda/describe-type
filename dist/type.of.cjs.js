/**
 * /     '      /  /
 * /__      ___ (  /
 * \--`-'-|`---\ |
 * |' _/   ` __/ /
 * '._  W    ,--'
 * |_:_._/
 * 
 * ~ describe-type v0.1.0
 *
 * @moment Monday, June 26, 2017 7:21 PM
 * @commit 206b51b991546cfe37a729828e9266a1534512be
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 */

'use strict';

var constructorOf = function constructorOf(value) {
	if (value === undefined || value === null) {
		return value;
	}
	return Object(value).constructor || Object;
};

var is_buffer = function isBuffer(value) {
	try {
		return constructorOf(value) === Buffer;
	} catch (err) {
		return false;
	}
};

var of = function typeOf(value) {
	const type = Object.prototype.toString.call(value).slice(8, -1);
	const name = type === 'Object' && Object(value.constructor).name;
	const buffer = type === 'Uint8Array' && is_buffer(value) && 'Buffer';
	return name || buffer || type;
};

module.exports = of;
