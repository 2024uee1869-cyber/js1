//singleton objects
// object.create

//object literals

const mySym=Symbol("key1");

const jsuser={
    name :"Hitesh",
    "full name":"Hitesh kumar",
    mySym:"value1",
    age: 19,
    location:"jaipur",
    email: "nishu.yadav@.com",
    isLoggedIn: false,
    lastlogindays:["Monday","saturday"]

}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(typeof jsuser[mySym]);
jsuser.email="23u9dnjrhnfncon@gmail.com"

// Object.freez(jsuser); //it will not allow to change the object properties

jsuser.email="2023hfwuhfhnwei@gmail.com"
console.log(jsuser);



jsuser.greeting=function(){
    console.log("Hello js user");
}
console.log(jsuser.greeting());

jsuser.greetingtwo=function(){
    console.log(`Hello ${this.name} welcome to ${this.location}`);
}
console.log(jsuser.greetingtwo());

