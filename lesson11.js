// Тернарный оператор используют для определения чему равна переменная в зависимости от каких-то условий
// switch case - когда надо сделать выбор из листа определенных значений (нельзя использовать опреаторы сравнения)

////////
// HOMEWORK
///////
/*
1. Записать в виде switch case следующее условие:
if (a === ‘block’) {
	console.log(‘block’)
} else if (a === ‘none’) {
	console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
	console.log(‘other’)
}
Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
2. Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.
*/

// task 1
let a = 'block';

switch(a) {
    case 'block': console.log('block'); break;
    case 'none': console.log('none'); break;
    case 'inline': console.log('inline'); break;
    default: console.log('other');
}   

//task 2

let b = 'visible';

b == 'hidden' ? b = 'visible' : b = 'hidden';
console.log(b);


let c = -2;

c = c == 0 ? c = 1 : c < 0 ? c = 'less then zero' : c *= 10;
console.log(c);













