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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.type = global.type || {}, global.type.constructorOf = factory());
}(this, (function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	return constructorOf;

})));
