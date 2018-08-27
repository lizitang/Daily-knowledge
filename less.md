### 值变量
以@开头定义变量，使用时直接键入 @名称
```
@color:#999;
@bgColor: skyblue; //不要添加引号
@width: 50%;

#wrap {
    color：@color;
    width：@width;
}
```
### 选择器变量
```
@mySelector: #wrap

@{mySelector} {
    color: #999;//变量名 必须使用大括号包裹
    width: 50%;
}

或者：
@Wrap: wrap;

#@{Wrap} {
    color:#ccc;
}
 .@{Wrap}{
    color:#ccc;
}
```
### 属性变量
```
/* Less */
    @borderStyle: border-style;
    @Soild:solid;
    #wrap{
        @{borderStyle}: @Soild;//变量名 必须使用大括号包裹
    }
        
    /* 生成的 CSS */
    #wrap{
         border-style:solid;
    }

```
### url 变量
```
    /* Less */
    @images: "../img";//需要加引号
    body {
        background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
    }
    
    /* 生成的 CSS */
    body {
        background: url("../img/dog.png");
    }
```
### 声明变量
>  -结构: @name: { 属性: 值 ;};
    - 使用：@name();
```
/* Less */
      @background: {background:red;};
      #main{
          @background();
      }
      @Rules:{
          width: 200px;
          height: 200px;
          border: solid 1px red;
      };
      #con{
        @Rules();
      }
    
      /* 生成的 CSS */
      #main{
        background:red;
      }
      #con{
        width: 200px;
        height: 200px;
        border: solid 1px red;
      }
```
### 变量运算
```
/* Less */
      @width:300px;
      @color:#222;
      #wrap{
        width:@width-20;
        height:@width-20*5;
        margin:(@width-20)*5;
        color:@color*2;
        background-color:@color + #111;
      }
    
      /* 生成的 CSS */
      #wrap{
        width:280px;
        height:200px;
        margin:1400px;
        color:#444;
        background-color:#333;
      }
```
## 嵌套
### &的妙用
&：表示上一层选择器的名字
```
/* Less */
      #header{
        &:after{
          content:"Less is more!";
        }
        .title{
          font-weight:bold;
        }
        &_content{//理解方式：直接把 & 替换成 #header
          margin:20px;
        }
      }
```
### 默认参数方法
```
      /* Less */
      .border(@a:10px,@b:50px,@c:30px,@color:#000){
          border:solid 1px @color;
          box-shadow: @arguments;//指代的是 全部参数
      }
      #main{
          .border(0px,5px,30px,red);//必须带着单位
      }
      #wrap{
          .border(0px);
      }
      #content{
        .border;//等价于 .border()
      }
    
      /* 生成的 CSS */
      #main{
          border:solid 1px red;
          box-shadow:0px,5px,30px,red;
      }
      #wrap{
          border:solid 1px #000;
          box-shadow: 0px 50px 30px #000;
      }
      #content{
          border:solid 1px #000;
          box-shadow: 10px 50px 30px #000;
      }
    
```