/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.1.1
 * 
 * @moment Tuesday, June 27, 2017 2:26 AM
 * @commit 61ef95618ae33c112d47a6387322b58f17b01b0f
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
define(function () { 'use strict';

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
		var type = Object.prototype.toString.call(value).slice(8, -1);
		var name = type === 'Object' && Object(value.constructor).name;
		var buffer = type === 'Uint8Array' && is_buffer(value) && 'Buffer';
		return name || buffer || type;
	};

	var constructorNameOf = function constructorNameOf(value) {
		var name = of(value);
		return (name === 'Function' && Object(value).name) || name;
	};

	return constructorNameOf;

});
