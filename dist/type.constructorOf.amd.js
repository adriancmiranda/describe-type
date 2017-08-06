/*!
 * 
 * ~~~~ describe-type v0.3.0
 * 
 * @commit 4b482c45ce1720d445e47eae2351c1d44510efc9
 * @moment Sunday, August 6, 2017 7:41 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2020
 */
define(function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	return constructorOf;

});
