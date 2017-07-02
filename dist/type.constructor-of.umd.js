/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.2.1
 * 
 * @moment Saturday, July 1, 2017 11:04 PM
 * @commit ba5b4dd641a8811a3e9a199a403734836366118c
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.type = global.type || {}, global.type['constructor-of'] = factory());
}(this, (function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	return constructorOf;

})));
