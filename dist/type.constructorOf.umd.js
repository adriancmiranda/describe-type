/*!
 * 
 * ~~~~ describe-type v0.3.0
 * 
 * @commit 5f7470ab91b522af395456371d383c1bb2331705
 * @moment Sunday, August 6, 2017 7:39 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-20173
 */
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
