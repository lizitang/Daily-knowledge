/*
* @Author: test
* @Date:   2017-06-26 16:48:49
* @Last Modified by:   test
* @Last Modified time: 2017-06-26 17:05:31
*/

'use strict';
function generateRandomAlphaNum(len){
	var rdmString='';
	for(;rdmString.length<len;rdmString += Math.random().toString(36).substr(2));
		return rdmString.substr(0,len);
}