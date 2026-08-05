const marvel_heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
const dc_heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Green Lantern', 'Aquaman'];

// marvel_heroes.push(dc_heroes); // Add dc_heroes array as a single element to marvel_heroes


// console.log(marvel_heroes); // Output: ['Iron Man', 'Captain America

const allHeroes = marvel_heroes.concat(dc_heroes); // Concatenate dc_heroes array to marvel_heroes

console.log(allHeroes); // Output: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Batman', 'Superman', 'Wonder Woman', 'Flash', 'Green Lantern', 'Aquaman']

const allnew_heroes = [...marvel_heroes, ...dc_heroes]; // Using spread operator to combine arrays

console.log(allnew_heroes); // Output: ['Iron Man', 'Captain



const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flat_array=another_array.flat(Infinity) //flatten the array upto 2 levels

console.log(flat_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("hitesh")); //check if value is array or not
console.log(Array.from("hitesh")); //convert string to array
console.log(Array.from({name:"hitesh",age:23})); //convert object to array

let score1=100;
let score2=200;
console.log(Array.of(score1,score2)); //convert values to array




