# vdialog

  简单、易用、轻量级 js 对话框组件.

## 引用

```html
<link rel="stylesheet" href="./css/vdialog.css">
<script src="./js/jquery-1.10.2.js"></script>
<script src="./js/vdialog.min.js"></script>
```

## 语法

```js
vdialog({
  title: '欢迎消息',
  content: '欢迎使用 vDialog 对话框组件！',
  ok: function(){
    alert('你点了确定按钮');
  },
  cancel: function(){
    alert('你点了取消按钮');
  },
  width: 800,
  height: 300
}).showModal();
```

### 选项

* 内容

  * title 对话框标题，默认为“提示信息”
  * content 对话框内容

* 按钮

  * ok 点击确定按钮执行的方法
  * okValue 确认按钮的文本，默认为“确定”
  * cancel 点击取消按钮执行的方法
  * cancelValue 取消按钮的文本，默认为“取消”
  * close 点击右上角关闭按钮执行的方法

* 外观

  * width 对话框宽度，可以使用数字或百分比表示
  * height 对话框高度，可以使用数字或百分比表示
  * left 对话框离页面左侧的距离
  * top 对话框离页面上方的距离

* 其他
  * time 通过 time 属性可以设置对话框一定时间后自动关闭，单位为“秒”
  * fixed 是否随屏滚动，默认为 false
  * modal 是否锁屏，默认为 false
  * esc 是否允许使用键盘“ESC”键退出
  * init 初始化对话框后执行的事件

### 属性

* top 顶层对话框

* returnValue 对话框关闭或退出时的返回值

### 方法

* title() 读取或设置对话框标题
* content() 读取或这只对话框内容
* ok() 设置或执行确定按钮事件
* cancel() 设置或执行取消按钮事件
* show() 显示对话框
* showModal() 显示模态对话框
* hide() 隐藏对话框
* close() 设置关闭窗口事件或关闭窗口

### 事件

* on 监听事件

  * show
  * hide
  * close
  * cancel

* emit 执行自定义事件

### 其他

* vDialog.alert() 显示一个带有提醒图标的对话框
* vDialog.success() 显示一个带有成功图标的对话框
* vDialog.error() 显示一个带有失败图标的对话框
* vDialog.confirm() 显示一个带有确认图标的对话框

### 详细文档

http://vdialog.qque.com/


## License

  [MIT](LICENSE)