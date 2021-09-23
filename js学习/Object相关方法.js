//1.Object.getPrototypeOf() 返回参数对象的原型
var F=function (){};
var f=new F();
console.log(Object.getPrototypeOf(f)===F.prototype)  //true

//2.Object.setPrototypeOf() 为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象
var a={};
var b={x:1};
Object.setPrototypeOf(a,b);
console.log(a.x)   //1
console.log(Object.getPrototypeOf(a)===b)  //true

//3.Object.create() 接受一个对象为参数，以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。
//原型对象
var A={
    print:function(){
        console.log('hello');
    }
}
//实例对象
var B=Object.create(A);
console.log(Object.getPrototypeOf(B)===A)  //true
B.print(); //hello

//4.实例对象的isPrototypeOf() 用来判断该对象是否是参数对象的原型
Object.prototype.isPrototypeOf()

//obj.constructor.prototype在手动改变原型对象时，可能会失效。
var P = function (name){
    this.name = name;
    this.age = name;
};
var p=new P(21);
var C=function (age){
    this.age=age;
    // P.call(this,21);
};
C.prototype = p;
var c =new C(21);
console.log("-------------"+c.name)
console.log(Object.getPrototypeOf(c))  //P
console.log(c.constructor)   //P   c.constructor所指向的prototype所在的构造方法
console.log(c.constructor.prototype)   //{}
console.log(c.constructor.prototype===p)  //false
C.prototype.constructor=C;
// console.log(c.constructor.prototype===p);  //true

//7.Object.getOwnPropertyNames() 方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。
console.log(Object.getOwnPropertyNames(c));
