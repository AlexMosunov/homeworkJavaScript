// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// функции высшего порядлка - принимают в качестве параметров другие функции или возвращают функции

/*
const arr = ['denis', 'alba', "jackson", "jo" ]

let newArr =[];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
}
console.log(newArr);
console.log(arr);

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) {
    console.log(el);
    return el;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

const result = mapArray(arr, nameLength);
const result2 = mapArray(arr, nameToUpperCase);
console.log(result);
console.log(result2);

*/

//////////////
// HOMEWORK
/*
1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки

*/
/* МЕТОДЫ которые не запоминаются

 parseFloat(num) - из стринг в число до первого знака
 array.slice(0, 4) - обрезать и скопировать в новый с какой-то по какую-то
 string.split('') - делает из строки массив , разделяет в данном случае по каждой букве
 array.reverse() - переварачивает массив наоборот (зеркально)
 array.join('') - соединяет массив обратно в строку
*/

//task 1

function firstFunction(arr, fn) {
    let stringRes = 'New value: ';
    for (let i = 0; i < arr.length; i++) {
        stringRes += fn(arr[i]);
    }
    return stringRes;
}

const resultatic = firstFunction(['my', 'name', 'is', 'Trinity'], secondFunction);
const resultatic2 = firstFunction([10, 20, 30], thirdFunction);
const resultatic3 = firstFunction([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], fourthFunction);
const resultatic4 = firstFunction(['abc', '123'], fifthFucntion);

function secondFunction(item) {
    return item[0].toUpperCase() + item.slice(1);
}

function thirdFunction(item) {
    return parseFloat(item * 10) + ' ';
}

function fourthFunction(item) {
    return ` ${item.name} is ${item.age},` 
}

function fifthFucntion(item) {
    return ` ${item.split('').reverse().join('')},`;
}

console.log(resultatic);
console.log(resultatic2);
console.log(resultatic3);
console.log(resultatic4);


















