//构造函数的继承
//例1
function Animal(name){
    this.name = name;
}
Animal.prototype.sleep= function(){
    console.log(this.name+"正在睡觉");
};
function Cat(name,color){
    Animal.call(this,name);
    this.color = color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat = new Cat("小黄","yellow");
cat.sleep()
//例2
function Person(name){
    this.name = name;
}
Person.prototype.say = function (){
    console.log("名字是"+this.name);
}
function Child(name,age){
    Person.call(this,name);
    this.age=age;
}
Child.prototype = new Person();
Child.prototype.constructor = Child;
var child = new Child("zhangsan","18")
child.say();

//非构造函数的继承
var Chinese = {
    nation:'中国'
};
function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}
var Doctor = object(Chinese);
Doctor.career = '医生';
console.log(Doctor.nation); //中国
console.log(Doctor.career); //医生
console.log(Doctor) //{ career: '医生' }
console.log(Doctor.__proto__)  //{ nation: '中国' }
















