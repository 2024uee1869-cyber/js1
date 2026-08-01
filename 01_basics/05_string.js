const name="hitesh";
const repocount=1000;

// console.log(name +repocount+" is the name of the repo");
console.log(`The name of the repo is ${name} and the repo count is ${repocount}`);

const gameName=new String("Pubg");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf("g"));
const newString=gameName.substring(0,2);
console.log(newString);
const anotherString=gameName.slice(-1,-2);
console.log(anotherString);


const NewStringOne="   hitesh   ";
console.log(NewStringOne);
console.log(NewStringOne.trim());


const url="https://nishu.com";
console.log(url.replace("https","http"));

console.log(url.includes("nishu"));

console.log(url.split("."));