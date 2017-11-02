/*!
 * 
 * ~~~~ describe-type v0.3.0
 * 
 * @commit b7dc375d7535d03018316db488c4153a68baf1e8
 * @moment Thursday, November 2, 2017 10:07 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2020 Adrian C. Miranda
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
