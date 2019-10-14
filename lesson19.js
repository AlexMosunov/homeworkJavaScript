// CLOSURES

// HOMEWORK
/*
1. Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.

2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)

3. Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5
*/

/*
4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

*/

// task 1

function getMinus(num1 = 0) {
    return function(num2 = 0) {
        return num1 - num2;
    }
}
console.log(getMinus()())


// task 2

function multiplyMaker(num) {
    let y = num;
    return function(num2) {
       return y *= num2;
    }
};

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
console.log(multiply(10));

// task 3

function moduleWithMethods() {
    let z = '';
    return {
        stringMaker(num) {  typeof(num) == "number" || "string" ? z = String(num) : z ; return z },
        getString() { return z},
        getStrLength() { return z.length },
        strReverse() { return z.split('').reverse().join('') }

    }
}
let checkCheck = moduleWithMethods();
console.log(checkCheck.stringMaker('abcde'))
console.log(checkCheck.getStrLength())
console.log(checkCheck.strReverse())

// task 4
/*
function calculator() {
    let a = 0;
    return {
        setNumber(num) { return a = num },
        plusNum(num) { return a + num},
        multiplyNum(num) { return (a = a * num)},
        divideBy(num) { return a = (num / a)},
        divideTheNum(num) { return a = (a / num)},
        raiseToPowerOf(num) { for (let i = 1; i < num; i++) { a = a * a } return a }
    }
}

let calculatorWorks = calculator();
*/
const  calculator = {
        a : 0,
        setNumber(num) { this.a = num; return this },
        plusNum(num) { this.a + num; return this},
        multiplyNum(num) { this.a = (this.a * num); return this},
        divideBy(num) { this.a = (num / this.a); return this},
        divideTheNum(num) {this.a = (this.a / num); return this},
        raiseToPowerOf(num) { for (let i = 1; i < num; i++) { this.a = this.a * this.a } return this }
    }







function getFullName(firstName, lastName) {
    return function() {
      return `${firstName} ${lastName}`;
    };
  }
  
  const getname = getFullName('Denis', 'Mescheryakov');
  // console.log(getname());
  
  function updateValue(val = 0) {
    let x = val;
    return function(num = 0) {
      return (x += num);
    };
  }
  
  const updtVal = updateValue(2);
  const updtVal2 = updateValue(4);
  // console.log(updtVal(1));
  // console.log(updtVal(0));
  // console.log(updtVal2(2));
  // console.log(updtVal2(0));
  
  function checkCred() {
    const login = 'test';
    const password = 'somePassword';
  
    return {
      checkLogin(value) {
        return login === value;
      },
      checkPassword(value) {
        return password === value;
      },
    };
  }
  
  const check = checkCred();
  // console.log(check);
  // console.log(check.checkLogin('test'));
  
  function closureExample() {
    const arrOfFunc = [];
    let value = '';
  
    for (let i = 0; i < 10; i++) {
      value += i;
      arrOfFunc.push(function() {
        console.log(value, i);
      });
    }
    return arrOfFunc;
  }
  
  const res = closureExample();
  res[0]();
  res[5]();
  