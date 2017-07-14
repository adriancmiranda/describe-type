/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.2.3
 * 
 * @moment Thursday, July 13, 2017 10:10 PM
 * @commit a4e17f6980d8c76df26bfabf836ac98c9b5b2db3
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
this.type = this.type || {};
this.type.to = (function () {
	'use strict';

	var objectToString = Object.prototype.toString;
	var reName$1 = /^.*function\s([^\s]*|[^(]*)\([^\x00]+/m;
	var reTrim = /\s+/g;

	var to = {};

	to.string = function toString(value, force) {
		if (value && value.constructor && force) {
			if (!value.constructor.name || value.constructor.name === 'Object') {
				return value.constructor.toString().replace(reName$1, '$1').replace(reTrim, '');
			}
			return value.constructor.name;
		}
		return objectToString.call(value).slice(8, -1);
	};

	to.int = function toInt(value) {
		return value;
	};

	to.uint = function toUint(value) {
		return value;
	};

	to.bool = function toBoolean(value) {
		return value;
	};

	var to_1 = to;

	return to_1;

}());
