//1.如何判断一个变量是否是数组
let names=['张安','里斯'];
// console.log(names instanceof Array)  //true

//2.判断一个变量是否为对象的函数
// console.log(Object(1))  //[Number: 1]
var obj = Object(1);
// console.log(obj instanceof Object)  //true
// console.log(obj instanceof Number)   //true
function isObject(value){
    return value === Object(value);
}
// console.log(isObject(1))   //false
// console.log(isObject([]))  //true

//3.比typeof运算符更准确的类型判断函数
var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

//4.判断一个值的类型。
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"

//5.Object.getOwnPropertyDescriptor() :获取属性描述对象
//6.Object.defineProperty()
let obj1 = Object.defineProperty({},'p',{
    value:123,
    writable:false,
    enumerable:false,
    configurable:false
})
console.log(obj1.p)   //123
obj1.p = 246;
console.log(obj1.p);