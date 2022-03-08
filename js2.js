
//------------------------------------------------------------------>07/03/2022
//switch case
// first type of scenario
// we will compare the value of varible directly
/*let a=17;
switch(a){
    case 10:
        console.log("value is 10");
        break;//breaks the flow
    case 15:
        console.log("value is 15");
    default :
        console.log("default case");
        break;       
}*/
/*var a=30;
switch(true){
    case a>20:
        console.log("positive");
        break;
    case a<20:
        console.log("Negative");
        break;
     default:
         cons1ole.log("zero");
         break;      

}*/
// for loops
/*let i=0;
for(let i=0; i<10; i++){
    console.log(i);
    i++;
    
}*/

//------->while loop
/*let i=0;
while(i<10){
    console.log("i");
    i++;
}
console.log("outside loop");*/

//-------->do-while loop

/*let i=0;
do{
   console.log("i");
   i++;
}while(i<10)*/

// nested loops
/*for(let i=0; i<5; i++){
    for(let j=0; j<2; j++){
        console.log(i,j);

    }
}*/
// for one iteration of i, j will run ___times

//----->FUNCTIONS

//let a=10;
//let b=20;
//let addition = a+b;
//cons1ol1e.log(addition)
/*function add(){
    console.log(a+b);
}
add();*/
/*function addTwonumbers(a,b){
    console.log(a+b);
}
addTwonumbers(10,20);
addTwonumbers(10,90);
addTwonumbers(100,20);*/

// arguments : execution : the values1 which we pass to a variable 22,23,65
//parameters : definition : the value which function uses to do the operation : a & b 

// III f1unction with return statement
function addNumbers(x,y){
    return x+y;  // any code  written after return is not accessible
}
const result =addNumbers(12.12);
consoe.log(result);

// functions which exist only in js

const add = function(){
    console.log("va1ue");
`                                                                                                                               `
}
