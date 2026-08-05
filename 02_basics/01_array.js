//arrray

const myArr=[0,1,2,3,4,5,true,"hitesh"]
const myhero=["saktiman ","nagraaj"]
const myArr2=new Array(1,2,3,4,5,6,7,8,9)

console.log(myArr[7]);




// Array methods;
myArr.push("new value") //add new value at the end of array
console.log(myArr);
myArr.pop() //remove last value from array
console.log(myArr);

myArr.unshift("new value") //add new value at the start of array
console.log(myArr);
myArr.shift() //remove first value from array
console.log(myArr);
console.log(myArr.includes("hitesh")); //check if value is present in array or not
console.log(myArr.indexOf("hitesh")); //return index of value in array

const newArr=myArr.join()
console.log(newArr); //convert array to string


//slice ,splice
console.log("a ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1); //return new array from index 1 to 3

console.log("b ",myArr);
const myn2=myArr.splice(1,3,"new value") //remove 3 values from index 1 and add new value at index 1
console.log("c ",myArr);
console.log(myn2);


