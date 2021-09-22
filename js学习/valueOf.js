// let obj={
// 	x:1
// }
// console.log(obj.toString())  //[object Object]
let array=[1]
// console.log(array.valueOf()==array)  //true
// console.log([1]==array) //false

let obj={
    x:1
}
let obj1={
    valueOf: function () {
        return [];
    }
}
// console.log(Number([]))
// console.log(Number({}))
// console.log(obj1.valueOf());
// console.log(Number(obj))  //NaN
// console.log(Number(obj1))  //NaN

// let x=1;
// if(x>0){
// 	throw new Error('出错了')
// }
// console.log("111")

// var count = 0;
// function countUp() {
//     try {
//         return count;
//     } finally {
//         count++;
//     }
// }
// console.log(countUp())  //0


var count =0;
function f(){
    try{
        throw 'bug'
    }catch (e) {
        console.log(e)
		console.log(1)
		return true;
    }finally {
        count++;
        // return false;
        console.log(2)
        console.log(count);
        return false;

    }
}
var result = f();
console.log(result)