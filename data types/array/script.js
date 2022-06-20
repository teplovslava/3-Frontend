//Задание 1 (Скопирован ли массив?)
//длина массива станет равна 4


//Задание 2 (Операции с массивами)
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");


//Задание 3 (Вызов в контексте массива)
//Вывод - a,b,function(){...}


//Задание 4 (Сумма введённых чисел)
function sumInput() {

    let numbers = [];
    let sum = 0;
  
while (true) {
  
let value = prompt("Введите число");
  
if (value === "" || value === null || !isFinite(value)) break; 
    numbers.push(Number(value));
    }
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
alert( sumInput() );



//Задание 5 (Подмассив наибольшей суммы)
function getMaxSubSum(arr) {
    let total = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        total = Math.max(total, sum);
      }
    }
    return sum;
  }
