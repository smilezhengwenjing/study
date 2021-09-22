var obj={
    a:undefined
}
console.log(JSON.stringify(obj))   //{}

var arr=[
    undefined,
    function () {

    }
]
console.log(JSON.stringify(arr)) //[null,null]
