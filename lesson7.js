//STRINGS


let string = 'some test string';

// task 1
let firstLetter = string[0];
let lastLetter = string[string.length - 1];

console.log(firstLetter, lastLetter);

//task 2 

let newString = string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase();

console.log(newString);

// task 3

let value = string.indexOf('string');
console.log(value);

// task 4

let space = string.indexOf(' ', 7);
console.log(space);

// task 5 and 6

let sliceVar = string.slice(5, 9);
console.log(sliceVar);

// task 7

let sliceVar2 = string.slice(0, -6);
console.log(sliceVar2);

// task 8

let a = 20;
let b = 16;

let stringAB = `${a}${b}`;
console.log(stringAB);






















