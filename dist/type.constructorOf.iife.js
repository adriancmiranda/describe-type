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
this.type = this.type || {};
this.type.constructorOf = (function () {
	'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	return constructorOf;

}());
