/*!
 *    /     '      /  /
 *   /__      ___ (  /
 *   \--`-'-|`---\ |
 *    |' _/   ` __/ /
 *    '._  W    ,--'
 *       |_:_._/
 *
 * ~~~~ describe-type v0.2.3
 *
 * @moment Wednesday, July 5, 2017 12:25 PM
 * @commit dd652fc4896f59b1f4dad49444f1a806f252f57c
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
this.type = this.type || {};
this.type.stringify = (function () {
	'use strict';

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

}());
