//Dates

let myDates=new Date();
// console.log(myDates);
console.log(myDates.toDateString());
console.log(myDates.toLocaleString());
console.log(myDates.getFullYear());
console.log(myDates.getMonth());
console.log(typeof myDates);


let myCreatedDate=new Date("2023-06-01");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDay());

let myTimeStamp=Date.now();
console.log(myTimeStamp);

let myNewDate=new Date(myTimeStamp);
console.log(myNewDate.toLocaleString('default',
     {timeZone: "Asia/Kolkata"}));