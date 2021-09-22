// 1.对象到原型，再到原型的原型……
// 2.所有对象的原型最终都可以上溯到Object.prototype,所有对象都继承了Object.prototype的属性
// 3.Object.prototype的原型是null,原型链的尽头就是null。
//1.4 consotructor属性
function Person(name){
    this.name=name;
}
console.log(Person.prototype.constructor)   //[Function: Person]
console.log(Person.prototype.constructor === Person);  //true
//constructor属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改constructor属性，防止引用的时候出错。
// Person.prototype={
//     method:function(){
//     }
// }
// console.log(Person.prototype.constructor)  //Object
//修改原型对象时，一般要同时修改constructor属性的指向。
Person.prototype.method=function(){}
console.log(Person.prototype.constructor.name)  //Person
//------------------------------------------------------------------------------------------------------
//2.instanceof运算符
//instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。
function Vehicle() {
}
var v = new Vehicle();
console.log(v instanceof Vehicle);  //true
// v instanceof Vehicle 等同于 Vehicle.prototype.isPrototypeOf(v)
//isPrototypeOf()方法是 JavaScript 提供的原生方法，用于检查某个对象是否为另一个对象的原型

var obj={};
console.log(obj===null)
console.log(obj instanceof Object)