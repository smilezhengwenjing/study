class Student{
    constructor(name,number){
        this.name = name;
        this.number = number;
        // this.gender = 'male';
    }
    sayHi(){
        console.log(
            `姓名${this.name}`
        )
    }
}

//通过类声明实例对象
const xialuo = new Student('夏洛',100);
console.log(xialuo.name);
xialuo.sayHi();

console.log(xialuo instanceof Student)

//隐式原型与显式原型
console.log(xialuo.__proto__);//隐式原型 Student {}
console.log(Student.prototype);//显式原型  Student {}
console.log(xialuo.__proto__ === Student.prototype)