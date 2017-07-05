/*
* @Author: test
* @Date:   2017-07-05 11:53:30
* @Last Modified by:   test
* @Last Modified time: 2017-07-05 12:07:13
*/

CookieUtil={
	addCookie:function(key,value,options){
		var str=key+'='+escape(value);
		if(options.expires){
			var curr=new Date();
			curr.setTime(curr.getTime()+options.expires*3600+1000);
			options.expires=curr.toGMTString();
		}
		for(var k in options){
			str+=";"+k+"="+options[k];

		}
		document.cookie=str;
	},
	queryCookie:function(key){
		var cookies=document.cookie;
		cookies+=";";
		var start=cookies.indexOf(key);
		if(start<=-1){return null;}
		var end=cookies.indexOf(";",start);
		var value=cookies.slice(start+key.length+1,end);
		return unescape(value);
	},
	deleteCookie:function(key){
		var value=CookieUtil.queryCookie(key);
		if(value===null){return false;}
		CookieUtil.addCookie(key,value,{expires:0});//把过期时间设置为0，浏览器会马上自动删除cookie
	}
}