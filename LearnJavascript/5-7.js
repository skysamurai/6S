/*
1. Фильтрация уникальных элементов массива
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:
function unique(arr) {
  ваш код
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(values) ); // Hare,Krishna,:-O

P.S. Здесь мы используем строки, но значения могут быть любого типа.
P.P.S. Используйте Set для хранения уникальных значений.
*/

function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

/*
2. Отфильтруйте анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

function aclean(arr) {
  let anagrams = new Map();
  for (let word of arr) {
    let sortedWord = word.toLowerCase().split('').sort().join('');
    console.log(sortedWord);
    anagrams.set(sortedWord, word);
  }

  return Array.from(anagrams.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

/*
3. Перебираемые ключи
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
Но это не выходит:

let map = new Map();
map.set("name", "John");
let keys = map.keys();
 Error: keys.push is not a function
 Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/

/*
push работает с массивом, нужно в keys загонять массив Array.from(map.keys())
*/

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);