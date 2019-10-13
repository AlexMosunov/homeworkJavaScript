
// ARROW FUNCTIONS
/*
Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

function sum() {
  const params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce(function (prev, next) { return prev + next; });
}

sum(1, 2, 3, 4); // 10
sum(); // 0


что такое метод reduce можно прочитать здесь
*/


// HOMEWORK

const sum = (...args) => {
    const params = Array.prototype.slice.call(args);
  
    if (!params.length) return 0;
  
    return params.reduce((prev, next) =>  { return prev + next} );
  }
  
  console.log(sum(1, 2, 3, 4)); // 10
  console.log(sum()); // 0




















