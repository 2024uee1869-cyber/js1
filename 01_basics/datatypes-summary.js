// primitive
// 7 types: string, Number,Boolean, NUll ,undefines, Symbol,BigInt;

const scorem=100;
const scorevalue=100.3
const score=false
const outsideTemp=null
let useremail;
const Id=Symbol('123')
const anotherId=Symbol('123')
console.log(Id==anotherId);
const nigNumber=23456789005757n




// Refernce (Non primitive);

// Arrray, Objects, Functions
const heros=["saktiman","naagraj","doga"];
const myObj={
    name: "hitesh",
    age: 22,

};
const myFunction= function(){
    console.log("hello world");
}
console.log(typeof scorevalue);
console.log(typeof myFunction);

///////////////MEMORY????
//Stack(primitive types) and Heap(Reference types)
let myYouTubeVideo="nishuyoutube.com";
let anotherVideo=myYouTubeVideo;
anotherVideo="nishuyoutube.com/another";
console.log({myYouTubeVideo,anotherVideo});

let userOne={
    email: "nishu@gmail.com",
    upi: "nishu@upi"
}

let userTwo=userOne;
userTwo.email="newemail@gmail.com";
console.log({userOne,userTwo});
