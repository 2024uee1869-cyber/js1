// const tinderuser=new Object();

const tinderuser={}
tinderuser.id="123abc";
tinderuser.name="nishu"
tinderuser.isLoggedIn=false;

// console.log(tinderuser);

const reguklaruser={
    email: "hidbvibgisnf@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nishu",
            lastname:"kumar"
            }

        }
}
console.log(reguklaruser.fullname.userfullname.firstname);

const obj1={1:"one",2:"two"};
const obj2={3:"three",4:"four"};

// const obj3={...obj1,...obj2};  //method 1
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);



const users=[
    {
        id:1,
        email:"yadavji@gmail.com"

    },
     {
        id:1,
        email:"yadavji@gmail.com"

    },
     {
        id:1,
        email:"yadavji@gmail.com"

    },

]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isLoggedIn"));
console.log(tinderuser.hasOwnProperty("isLogged"));



///////////
const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"nishu yadav",

}

//course courseInstructor="nishu kumar yadav"; //update
const{courseInstructor:instructor}=course;  //destructuring
// console.log(courseInstructor);
console.log(instructor);

// const navbar=({companyName,companyLogo,companyTagline})=>{

// }
// navbar({companyName:"nishu yadav",companyLogo:"logo.png",companyTagline:"we are the best"});


// JSON

// {
//   name: "nishu",
//   courseName: "js in hindi",
//   price:"000"

// }

[
    {},
    {},
    {}
]


