// Что выведет код ниже?
alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1 и 2

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // 1 и undefined

alert( null || 2 && 3 || 4 ); // 3

let value = NaN;
value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;
alert(value); // 30

/* Напишите условие if для проверки, что переменная
age находится в диапазоне между 14 и 90 включительно.*/
if (age >= 14 && age <= 90)

/* Напишите условие if для проверки, что значение переменной
age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, 
второй – без этого оператора. */
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

/* Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений
в условиях if(...)? */
if (-1 || 0) alert( 'first' ); // выполнится
if (-1 && 0) alert( 'second' ); // Не выполнится
if (null || -1 && 1) alert( 'third' ); // Выполнится

/* Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, 
если ничего не введено или нажата клавиша Esc – показать «Отменено», 
в противном случае отобразить «Я вас не знаю».
Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене или в случае если ничего не введено – «Отменено». */

let login = prompt ('Кто там?', '')
if (login === '' || login === null) {
	alert ('Отмененно')
} else if (login === 'Админ') {
	let password = prompt ('Пароль?', '')
		if (password === '' || password === null) {
			alert ('Отмененно')
	} else if (password === 'Я главный') {
		alert ('Здравствуйте!')
	} else {
		alert ('Неверный пароль')
	}
} else {
	alert ('Я вас не знаю')
}