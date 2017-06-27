/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.1.0
 * 
 * @moment Monday, June 26, 2017 11:23 PM
 * @commit 76e44a452342a2ed215c725b4b3023a6180b0521
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
this.type = this.type || {};
this.type['constructor-of'] = (function () {
	'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	return constructorOf;

}());
