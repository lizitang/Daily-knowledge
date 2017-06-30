/*
* @Author: test
* @Date:   2017-06-29 18:20:24
* @Last Modified by:   test
* @Last Modified time: 2017-06-29 18:23:54
*/

'use strict';
//归并方法
var numbers=[1,2,4,5,3,6,8];
var reduceResult=numbers.reduce(function(prev,cur,index,array){
	return prev+cur;
});
console.log(reduceResult);//29,可以计算数组所有数字的和