/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.2.2
 * 
 * @moment Sunday, July 2, 2017 4:32 PM
 * @commit 009e831837189e52cd83299056d45b4c586e4d0f
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
define(function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	return constructorOf;

});
