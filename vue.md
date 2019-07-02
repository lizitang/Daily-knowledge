MVVM
单向数据绑定：model数据改变，view也会随之改变
双向数据绑定：在单向数据绑定的基础上给可输入元素(input,textarea)
添加change(input)事件，来动态修改model和view

实现数据绑定的方式：
1：发布者-订阅者模式(backbone.js)
2: 脏值检查(angular)
3: 数据劫持(vue)

数据劫持：vue.js则是采用数据劫持结合发布者-订阅者模式的方式。通过
Object.defineProperty()来劫持各个属性的setter，getter,在数据
变动时发布消息给订阅者，触发相应的监听回调
Object.defineProperty(obj,prop,descriptor)

以下主要讲vue是如何实现双向数据绑定的：

a:实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到
最新值并通知订阅者
b:实现一直指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板
替换数据，以及绑定相应的更新函数
c:实现一个watcher，作为连接Observer和Compile的桥梁，能够订阅并接收到每个属性变动的通知,执行指令绑定的相应回调函数，从而更新视图

### 1、实现Observer
 利用Object.defineProperty()来监视属性变动，将需要observer的数据对象进行递归遍历，包括子属性对象的属性，加上setter和getter，给这个对象的某个值赋值，会触发setter，从而监听到数据的变化
```js
  var data = {name:'lizi'};
  observe(data);
  data.name = 'test';

  function observe(data) {
    if(!data || typeof data) {
      return;
    }
    // 取出所有属性遍历
    Object.keys(data).forEach(function(key){
       //key为name
       defineReactive(data,key,data[key])
    })

    function defineReactive(data,key,val) {
      observe(data); //监听子属性
      Object.defineProperty(data,key,{
        configurable: false,
        enumerable: true,
        // 读取属性时调用的函数
        get: function() {
          return val;
        },
        // 写入属性时调用的函数
        set: function(newVal) {
          console.log("监听到变化",val,"->",newVal);
          val = newVal
        }
      })
    }
  }
```
监听到数据的变化，但是要怎么通知订阅者呢？？接下来实现一个消息订阅器，很简单，维护一个数组，用来收集订阅者，数据变动触发notify，再
调用订阅者的update方法
```js
  function defineReactive(data,key,val){
    var dep = new Dep(); //
    observe(data);
    Object.defineProperty(data,key,{
      get: function() {
        Dep.target && dep.addDep(Dep.target);
        return val;
      },
      set: function(newVal) {
        if(val === newVal) return;
        console.log("监听到变化",val,"->",newVal);
        val = newVal;
        dep.notify(); //有变化通知
      }
    })
  }

  function Dep() {
    this.subs = [];
  }
  Dep.prototype = {
    addSub: function(sub) {
      this.subs.push(sub)
    },
    notify:function() {
      this.subs.forEach(function(sub) {
        sub.update();
      })
    }
  }
```
### 2、实现Compile
Compile主要解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
```js

```


## vue中使用腾讯地图
****************
新的需求是在表格列表中展示小区位置（这部分为文字），点击该单元格，出现地图并显示该小区的具体位置
首先：选择了腾讯地图，[开发指南：](https://lbs.qq.com/guides/startup.html) 
1：第一步：申请key,公司提供了key,所以自己没有申请（没有的话自己在上面的链接申请哦）
2：第二步：在index.html中引入腾讯地图包
```js
<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=yourkey"></script>
```
3: 初始化地图：
## element-ui 表格点击缩略图放大效果
