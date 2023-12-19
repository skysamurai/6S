// 'use strict';
let str = "Привет";
str.test = 5; // (*)
alert(str.test);

/*
Undefined, потому что нет str.test, при use striсt mode ошибка TypeError
*/