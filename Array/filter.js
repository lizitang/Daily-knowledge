/*
* @Author: test
* @Date:   2017-06-29 18:13:32
* @Last Modified by:   test
* @Last Modified time: 2017-06-29 18:22:51
*/

'use strict';
var numbers=[1,2,4,5,3,6,8];
var filterResult=numbers.filter(function(item,index,array){
	return (item > 2);
});

console.log(filterResult);// [4, 5, 3, 6, 8]