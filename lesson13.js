
// FUNCTIONS

// HOMEWORK
/*
1 .Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

Если нет ни одного аргумента, вернуть ноль: multiply() // 0

2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 

getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

подсказка: для получения кода используйте специальный метод 

4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3]

7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
*/

// task 1

function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}

console.log(multiply(2,3,4));

// task 2

function stringToReverse (string) {
   return string.split('').reverse().join('');
}

console.log(stringToReverse('hello'));

// task 3

function getCodeStringFromText(string) {
    let stringArr = string.split('');
    let codeArr = [];
    for (let letter of stringArr) {
        codeArr.push(letter.charCodeAt());
        
    }
    return codeArr.join(' ');
}

console.log(getCodeStringFromText('hello'));

// task 4 

function gameRandom(num) {
    if (num >= 0 && num <= 10) {
        let randomNumberGame = (Math.random() * 10).toFixed();
        if (num == randomNumberGame) {
            return 'You won'
        } else {
            return `you did not win. Your number is ${num} and winning number is ${randomNumberGame}`
        }
    } else {
        return `enter number from 0 to 10`
    }
}
console.log(gameRandom(5));

// task 5

var arrayNum = [];
function arrayFunction(num) {
 for (let i = 1; i <= num; i++) {
     arrayNum.push(i);
 }
 return arrayNum;
}
console.log(arrayFunction(10));

// task 6

function arrayConcat(arr) {
    return arr.concat(arr);
}
console.log(arrayConcat([1,2,3]));

// task 7
let abc = ['a', 'b', 'c'];
let numbers123 = [1, 2, 3];
let firstLet =[];

function deleteFirst() {
    for (let i = 0; i < arguments.length; i ++) {
    firstLet.push(arguments[i].slice(1));
    }
    return firstLet;
}

console.log(deleteFirst(numbers123, abc));


// task 8

let arrOfObjects = [
    {
        name: 'denis',
        age : 29
    },
    {
        name: 'Ivan',
        age: 20
    }
]

console.log(arrOfObjects.length);


function funcGetUsers(arr, par2, par3) {
    for (let i = 0; i < arr.length; i++) {
        arr[i][par2] = par3;
    }
    return arr;
}

console.log(funcGetUsers(arrOfObjects, "gender", 'male'))































