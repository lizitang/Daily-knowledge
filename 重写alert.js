/*
* @Author: test
* @Date:   2017-06-26 17:06:52
* @Last Modified by:   test
* @Last Modified time: 2017-06-26 17:09:57
*/

'use strict';
(function(){
	var oldAlert = window.alert,
	count = 0;
	window.alert=function(a) {
		count++;
		oldAlert(a+"\n You've called alert" +count+ "times now.Stop,it's evil!");
	}
})();
alert('haha');