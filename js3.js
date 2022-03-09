/------------------>08/03/2022
// global execution
//   memmory         |      execution
//  a:undefined      |     1.100     --------------------> call stack-->global
//                   |     3.clog(a)
//                      / 
//                     /
//  memory // var a=10
//   /\
// 1.variables 2. function definitions
//  

//var a 
//console.log(a);
//a=10


// if there is a block of code that we need tp put in the function

//functions are reusabl blocks of code
//function ab(){
    //code block for the function
//  console.log('Inside a1bc')
//}
// to run the block of code ins1ide the 1f1unction ,I need to execute (call) the function
//abc() // function execution,function call1

/*function add(a,b){ //4,5 //parameters
    console.log(a+b);
}
add(4,5)// arguments*/
/*function add(a,b){
    return a+b
    console.log('hi there  is unreachable code')// console not visble since it is  after return 
}
//var result=add(4,6)
//console.log(result)
console.log(add(4,2))*/

/*function add(a,b){
    console.log(a)
    debugger;//stops the code at this point of execution
    console.log(a+b)
}
    console.log(add)
    add(4,5)*/

/*function add(a,b){
    return a+b
}
var result = add(4,3)
    console.log(result)*/

/*function abc(a,b){// scope of a,b is abc function
    var a = 10
    var b = 20
    console.log(a,b, "inside abc")
    console.log(x)
}
var x=10//scope of x is global
abc()
//console.log(a,b,'Inside global')*/
/*var x = 10

function a() {
    var y = 20
    function b() {
        console.log(x, y)
    }
    b()
