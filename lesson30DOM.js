// Найти параграф и получить его текстовое содержимое (только текст!)

let a = document.querySelector("article").textContent;
//console.log(a);

//Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов
let f1 = function(dom) {
  return {
    type: dom.nodeType,
    name: dom.nodeName,
    children: dom.children
  };
};
console.log(f1(document.querySelector("p")));

//Получить массив, который состоит из текстового содержимого ссылок внутри списка
let f2 = function(ul) {
  let array1 = [];
  array1.push(ul.textContent);
  return array1;
};
console.log(f2(document.querySelector("ul")));

// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться).
let b = document.querySelectorAll("p")[4].childNodes;
for (let i = 0; i < b.length; i++) {
  b[i].data = " text ";
}

console.log(b);

// Найти в коде список ul и добавить класс “list”

let c = document.querySelector("ul");
c.classList.add("list");
console.log(c);

// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let d = document.querySelector("span").nextElementSibling;
d.setAttribute("id", "link");
console.log(d);

// На li через один (начиная с самого первого) установить класс “item”

let e = document.querySelectorAll("li");

for (let i = 0; i < e.length; i += 2) {
  e[i].classList.add("item");
}
console.log(e);

//На все ссылки в примере установить класс “custom-link”

let f = document.querySelectorAll("a");
f.forEach(i => i.classList.add("custom-link"));

console.log(f);

//Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

const fragment = document.createDocumentFragment();
let g = document.querySelector("ul");
let item = "item ";

for (let i = g.children.length + 1; i < 8; i++) {
  let li = document.createElement("li");
  li.classList.add("new-item");
  li.textContent = item + i;

  fragment.appendChild(li);
}
g.appendChild(fragment);


