## Object.assign()
Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
* 语法
    > Object.assign(target, ...sources)
    参数
    target
        目标对象
    sources
    (多个)源对象。
    返回值

    目标对象。

    ## 描述
    如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。

    Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象身上。该方法使用源对象的 [ [ Get ] ] 和目标对象的 [ [ Set ] ]，所以它会调用相关 getter 和 setter。因此，它分配属性而不是复制或定义新的属性。如果合并源包含了 getter，那么该方法就不适合将新属性合并到原型里。假如是拷贝属性定义到原型里，包括它们的可枚举性，那么应该使用 Object.getOwnPropertyDescriptor() 和 Object.defineProperty() 。

    String类型和 Symbol 类型的属性都会被拷贝。

    注意，在属性拷贝过程中可能会产生异常，比如目标对象的某个只读属性和源对象的某个属性同名，这时该方法会抛出一个 TypeError 异常，拷贝过程中断，已经拷贝成功的属性不会受到影响，还未拷贝的属性将不会再被拷贝。

    注意， Object.assign 会跳过那些值为 null 或 undefined 的源对象。

    ## 示例
    * 复制一个object
        > var obj = { a: 1 };
        var copy = Object.assign({}, obj);
        console.log(copy); // { a: 1 }

    ## 1.   
    // var myObject = {
            foo: "bar",
            func: function() {
                var self = this;
                console.log(this.foo);  //bar
                console.log(self.foo);  //bar
                //立即执行函数
                (function() {
                    console.log(this.foo);  //立即执行函数，this指向window
                    console.log(self.foo);  //第四个self.foo输出bar，因为这个匿名函数所处的上下文中没有self，所以通过作用域链向上查找，从包含它的父函数中找到了指向myObject对象的self
                }());
            }
        };
        myObject.func();
