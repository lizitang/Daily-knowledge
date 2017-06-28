/*
* @Author: test
* @Date:   2017-06-26 16:13:03
* @Last Modified by:   test
* @Last Modified time: 2017-06-26 16:30:09
*/

'use strict';
function parseURL(url){
	var a=document.createElement('a');
	a.href=url;
	return{
		source:url,
		protocol:a.protocol.replace(':',''),
		host:a.hostname,
		port:a.port,
		params:(function(){
			var ret={},
				seg=a.search.replace(/^\?/,'').split('&'),
				len=seg.length,i=0,s;
				for(;i<len;i++){
					if(!seg[i]){
						continue;
					}
					s=seg[i].split('=');
					ret[s[0]] = s[1];
				}
				return ret;
		}) (),
		file : (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
		hash: a.hash.replace('#',''),
		path:a.pathname.replace(/^([^\/])/,'/$1'),
		segments: a.pathname.replace(/^\//,'').split('/')
	};
}
parseURL('http://www.cnblogs.com/wayou/p/');