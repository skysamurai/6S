/*
1. Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

Для решения применил функцию написаную в задачах по строкам
*/
function camelize(str) {
  let strSplite = str.split('-');
  let camelStr = strSplite.reduce((sum, current, index) => {
    if (index) {
      sum += ucFirst(current)
    }
    return sum;
  }, strSplite[0]);
  return camelStr;
}


function ucFirst(str) {
  if (!str) return str;
  let str2 = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    str2 += str[i];
  }
  return str2;
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

/*
2. Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.

Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
};

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)

/*
3. Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
*/
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
  
filterRangeInPlace(arr, 1, 4);
alert( arr );

/*
4. Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10
*/
arr = [5, 2, 1, -10, 8];

function compareNum(a, b) {
  if (a > b) return -1; 
  if (a == b) return 0;
  if (a < b) return 1;
}

arr.sort(compareNum);
alert(arr);

/*
5. Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

function copySorted(arr) {
  let copyArr = arr.concat();
  copyArr.sort();
  return copyArr;
}

arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

/*
6. Создать расширяемый калькулятор
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function(str) {
    let arr = str.split(' ');
    let a = +arr[0];
    let operator = arr[1];
    let b = +arr[2];
    if (isNaN(a) || isNaN(b)) return NaN;
    return this.operations[operator](a,b);
  };

  this.addMethod = function (name, func) {
    this.operations[name] = func;
  }
}

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result );

/*
7. Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = 

alert( names ); // Вася, Петя, Маша
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(a => a.name);

alert( names ); // Вася, Петя, Маша

/*
8. Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped =  ... ваш код ... 

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой.
*/

vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };
users = [ vasya, petya, masha ];

let usersMapped = users.map ( users => ({
id: users.id,
fullName: users.name + " " + users.surname
}));

alert( usersMapped[0].id )
alert( usersMapped[0].fullName )

/*
9. Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/

function sortByAge(users) {
  users.sort(function (a, b) {
    return a.age - b.age; 
  });
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };
arr = [ vasya, petya, masha ];

sortByAge(arr);

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

/*
10. Перемешайте массив
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
arr = [3, 2, 1]

shuffle(arr);
arr = [2, 1, 3]

shuffle(arr);
arr = [3, 1, 2]
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/

function shuffle(array) {
  let j, temp;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i]= temp;
  }
  return array;
}

arr = [1, 2, 3];

for (let i = 0; i < 10; i++) {
  console.log(shuffle(arr));
}

/*
11. Получить средний возраст
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 
*/

function getAverageAge(users) {
  return Math.round(users.reduce((ageSum, current) => ageSum + current.age, 0) / users.length);
}

arr = [ vasya, petya, masha ];
alert( getAverageAge(arr) );

/*
12. Оставить уникальные элементы массива
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:
function unique(arr) {
  
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
*/

function unique(arr) {
  let sort = [];
  for (let str of arr) {
    if (!sort.includes(str)) {
      sort.push(str)
    }
  }
  return sort;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

/*
13.Создайте объект с ключами из массива
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);


после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Такая функция очень удобна при работе с данными, которые приходят с сервера.
В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
Используйте метод .reduce в решении.
*/

function groupById(arr) {
  return arr.reduce((object, key) => {
  object[key.id] = key;
  return object;
}, {})
}

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

console.log (groupById(users));