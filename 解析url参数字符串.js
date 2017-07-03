/*
* @Author: test
* @Date:   2017-07-03 16:39:12
* @Last Modified by:   test
* @Last Modified time: 2017-07-03 16:59:18
*/


function getQueryStringArgs(){
	//取得查询字符串，并去掉开头的问号
	var qs = (location.search.length>0)?location.search.substring(1):"",
	
	//保存数据对象
	args={},

	//取得每一项
	items=qs.length?qs.split('&'):[],
	item=null,
	name=null,
	value=null,
	//在for循环中使用
	i=0,
	len=items.length;
	//将每一项添加到args
	for(i=0;i<len;i++){
		item=items[i].split('=');
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);
		if(name.length){
			args[name] = value;
		}
	}
	return args;
}

