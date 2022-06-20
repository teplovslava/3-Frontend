//Задание 1 (Сумма пользовательских чисел)
let a = Number(prompt('Введите число'))
let b = Number(prompt('Введите число'))

alert(a+b)



//Задание 2 (Почему 6.35.toFixed(1) == 6.3?)
Math.round(6.35 * 10) / 10  // == 6.4



//Задание 3 (Ввод числового значения)

function readNumber() {
    let num;
    do {
      num = prompt("Введите число");
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
alert(`Число: ${readNumber()}`);



//Задание 4 (Бесконечный цикл по ошибке)
//потому что 0.2 является бесконечной дробью в двоичной форме,
//соответсвенно в десятичной форме у нее него есть погрешность 
//и такое сложение i += 0.2 никогда не станет равно 10


//Задание 5 (Случайное число от min до max)
function random(min, max){
    return min + Math.random() * ( max-min )
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );



//Задание 5 (Случайное целое число от min до max)
function randomInteger(min, max){
    return Math.floor(min + Math.random() * ( max-min ))
}