// LOOPS 
// while, do while, for ,for of, or in
/*
let i =0;
while(i < 10) {
    console.log(i);
    i++;
}

while(i++ < 10) {
    console.log(i);
}

while(i--) {
    console.log(i);
}

do {
    console.log('action');
} while(i > 0);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let str = "Hello";
let res = '';

for (let i = 0; i < str.length; i++) {
    res += str[i] + '*'; 
}
*/

///////
//HOMEWORK
////////
/*
1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
будут в верхнем регистре. Использовать for или while.
2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
6. Дан объект:
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
*/

// task 1
let string1 = 'i am in the easycode';
let stringSplit = string1.split(' ');
let newString = '';

for (let i = 0; i < stringSplit.length; i++) {
    let firstLetter = stringSplit[i][0].toUpperCase();
    let restOfWord = stringSplit[i].slice(1);
    newString += firstLetter + restOfWord + ' ';
 }

// task 2
let string2 = 'tseb eht ma i';
let stringArray = string2.split('');
let stringReverse = stringArray.reverse();
let stringString = '';

for (let i = 0; i < stringArray.length; i++) {
    stringString += stringReverse[i];
}

console.log(stringString);

// task 3
let number1 = 10;
let result = 1;

for (let i = 1; i <= number1; i++ ) {
    result *= i;
}
console.log(result);

// task 4


let stringNew = 'JavaScript is a pretty good language';
let stringSplitNew = stringNew.split(' ');
let newNewString = '';

for (let i = 0; i < stringSplitNew.length; i++) {
    let firstLetter = stringSplitNew[i][0].toUpperCase();
    let restOfWord = stringSplitNew[i].slice(1);
    newNewString += firstLetter + restOfWord;
 }

console.log(newNewString);


// task 5

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let newNumberArray = [];


for (let value of numberArray) {
    if (value % 2 != 0) {
        newNumberArray.push(value);
    };
}
console.log(newNumberArray);

// task 6

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let key in list) {
    typeof(list[key]) == 'string' ? list[key] = list[key].toUpperCase() : list[key];
}
console.log(list);








