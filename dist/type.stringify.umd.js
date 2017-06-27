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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.type = global.type || {}, global.type.stringify = factory());
}(this, (function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var stringify = function stringify(value, space, replacer) {
		if (constructorOf(value) === RegExp || constructorOf(value) === Function) {
			return value.toString();
		}
		return JSON.stringify(value, replacer, space);
	};

	return stringify;

})));
