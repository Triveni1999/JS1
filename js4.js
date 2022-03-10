//------------------->09/03/2022
//Arrays
// using array literals
/*let arr = [];//empty  array
console.log("arr",arr);
// us1ing constructor f1unction 
let anotherArr = new Array(1,4,2,3,5,4,6)
console.log("anotherArr",anotherArr);*/

//push , pop, shift,unshift
/*let values = ["a","e","i","o","u"];

// length of the array
console.log(values.length);
values[10]=12;
console.log(values);*/

/*console.log(values);
values.push(1);
console.log(values);
values.pop();    //remoes from end
console.log(values);
values.shift();    //removes from start
console.log(values);
values.unshift("a");
cons1ole.log(values)*/

// function to find out how many numeric values in an array 
/*function countString (arr){
    let count = 0;
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof(element)==="string") count++;
        // if (typeof(element)==="string") tempArr.push(element)
    }
    return tempArr;
}

const result = countString(["a", "b", "c", 1, 3, 5]);
console.log(result);*/

let arr =[1,2,3,4,5];
// some and array
const value1 = arr.some(element => element>2);
const value2 = arr.every(element => element>2);
 console.log(value1,value2) //true false
