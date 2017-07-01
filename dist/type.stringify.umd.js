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
 * @moment Friday, June 30, 2017 10:39 PM
 * @commit cdfd13c7ef8bc884fdb15d10138081b22e579e6a
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
