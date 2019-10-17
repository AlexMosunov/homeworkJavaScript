/*
Зная структуру html, с помощью изученных
методов получить (в консоль):
1. head
2. body
3. все дочерние элементы body и вывести их в
консоль.
4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
б) вывести в консоль все дочерние узлы,
кроме первого и последнего
Для навигации по DOM использовать методы,
которые возвращают только элементы

1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
 true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'));
 false так ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты.

2. Получить список всех ссылок, которые не находятся внутри списка ul
3. Найти элемент, который находится перед и после списка ul

*/
let a = document.querySelector("head");
let b = document.querySelector("body");
let c = document.querySelector("body").childNodes;
let d = document.querySelector("body").firstElementChild;
let f = d.children;
let g = d.firstElementChild.nextElementSibling;
let h = g.nextElementSibling;

console.log(g, h);

let fun = function(parent, child) {
  return parent == child.parentNode;
};
console.log(fun(b, d));

let m = document.querySelector("p a");
let n = document.querySelector("span").nextElementSibling;

console.log(m, n);

let o = document.querySelector("ul").previousElementSibling;
let p = document.querySelector("ul").nextElementSibling;
console.log(o, p);
