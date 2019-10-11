// оператор || запинается на правде (на первом значении правды)
// оператор && запинается на лжи
/*
let a = 0 || 'string'; // string - true
let a = 1 && 'string'; // string - оператр И возвращает последнее true
let a = null || 25; // 25 - true
let a = null && 25; // null - false
let a = null || 0 || 35; // 35 - fisrt true
let a = null && 0 && 35; // null - first false
*/
//console.log(a);
/*
console.log(12 + 14 + '12') // 2612 -- 12+14= 26; 26 + '12' = 2612
console.log(3 + 2 - '1') // 4
console.log('3' + 2 - 1) // 31
console.log(true + 2) // 3 -- true equals 1
console.log(+'10' + 1) // 11 -- +'10' transforms '10' into number
console.log(undefined + 2) // NaN cant perform operations with undefined
console.log(null + 5) // 5 -- null equals 0
console.log(true + undefined) // NaN

*/

//////
//HOMEWORK 
/////
/*
1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
2. Используя if, записать условие:
 если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

5. Дан следующий код:

let product = {
    name: “Яблоко”,
    price: “10$”
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.


*/
// task 1

var testVar = 'hidden';

if (testVar == 'hidden') {
    testVar = 'visible';
} else {
    testVar = 'hidden';
}
console.log(testVar);

// task 2

let someNumber = 5;

if (someNumber == 0) {
    someNumber = 1;
} else if (someNumber < 0) {
    someNumber = 'less then zero'
} else {
    someNumber *= 10;
}

console.log(someNumber);

//task 3

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false 
}


if (car.age > 5) {
    console.log('need repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}
console.log(car);

// task 4
let item = { 
    name: 'Intel core i7',
    price: '100$', 
    discount: '15%' 
}

if (item.discount) {
    item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) * parseFloat(item.discount) * 0.01);
    console.log(item.priceWithDiscount + '$');
} else {
    console.log(item.price);
}

//task 5
let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseFloat(product.price) >= min || parseFloat(product.price) == max) {
    console.log(product.name);
} else {
    console.log('This product is not found');
}




