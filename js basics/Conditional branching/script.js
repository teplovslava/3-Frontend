//Задача 1 (if (строка с нулём))
//Выведется, так как "0" строка и она равна true


//Задача 2 (Название JavaScript)

let result = prompt("Какое 'официальное' название JavaScript?");

if(result == "ECMAScript") {
    alert('Верно!')}
else{ 
    alert('Не знаете? ECMAScript!')};



//Задача 3 (Покажите знак числа)

let result = prompt('Введите число!')

if ( result > 0 ) {
    alert("1")
} else if ( result < 0 ) {
    alert('-1')
} else {
    alert("0")
}

//Задача 4 (Перепишите 'if' в '?')

let result = (a + b < 4) ? alert ('Мало') : ("Много");



//Задача 5 (Перепишите 'if..else' в '?')

let massage = (login == 'Сотрудник') ? message = 'Привет' : (login == 'Директор') ? message = 'Здравствуйте' : (login == '') ? message = 'Нет логина' : message = '';
