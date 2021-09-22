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