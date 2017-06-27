/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.1.0
 * 
 * @moment Monday, June 26, 2017 11:15 PM
 * @commit d04aff0efbb307a5587d6a323171f33a2b7facd2
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
this.type = this.type || {};
this.type['constructor-name-of'] = (function () {
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

}());
