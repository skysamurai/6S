/*
Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
*/

function ucFirst(str) {
  if (!str) return str;
  let str2 = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    str2 += str[i];
  }
  console.log(str2);
  return str2;
}

ucFirst("");

/*
Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
  return ( (str.toUpperCase()).indexOf('VIAGRA') != -1 || (str.toUpperCase()).indexOf('XXX')!= -1 ) 
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

/*
Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    str = str.slice(0, maxLength-1) + "\u2026"
  }
  console.log(str);
  return str;
  }

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

/*
Выделить число
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:
alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 );